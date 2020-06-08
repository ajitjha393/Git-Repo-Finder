import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import User from './components/users/User'
import { UserItemType, UserType } from '../types/index'
import './App.css'

const GITHUB_ENDPOINT = `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`

interface State {
	users: UserItemType[]
	loading: boolean
	alert: null | { msg: string; type: string }
	user: UserType
}

class App extends Component<{}, State> {
	state = {
		users: [] as UserItemType[],
		loading: false,
		alert: null,
		user: {} as UserType,
	}

	async componentDidMount() {
		this.setState({ loading: true })

		const resData: UserItemType[] = (await axios.get(GITHUB_ENDPOINT)).data
		console.log(resData)
		this.setState({ users: resData, loading: false })
	}

	searchUsers = async (text: string) => {
		this.setState({ loading: true })

		const resData = (
			await axios.get(
				`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
			)
		).data.items

		console.log(resData)
		this.setState({ users: resData, loading: false })
	}

	// Get a single Github Users
	getUser = async (username: string) => {
		this.setState({ loading: true })

		const resData = (
			await axios.get(
				`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
			)
		).data

		console.log(resData)
		this.setState({ user: resData, loading: false })
	}

	// Clear users from the state
	clearUsers = () => {
		this.setState({
			users: [] as UserItemType[],
			loading: false,
		})
	}

	// Alert user
	setAlert = (msg: string, type: string) => {
		this.setState({ alert: { msg, type } })
		setTimeout(() => {
			this.setState({ alert: null })
		}, 2000)
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Navbar title="GitHub Finder" />
					<div className="container">
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path="/"
								render={() => (
									<Home
										searchUsers={this.searchUsers}
										clearUsers={this.clearUsers}
										setAlert={this.setAlert}
										loading={this.state.loading}
										users={this.state.users}
									/>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/user/:login"
								render={(props) => (
									<User
										{...props}
										getUser={this.getUser}
										user={this.state.user}
										loading={this.state.loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

export default App
