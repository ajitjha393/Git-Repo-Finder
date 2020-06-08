import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Search from './components/users/Search'
import Users from './components/users/Users'
import { UserItemType } from '../types/index'
import './App.css'

const GITHUB_ENDPOINT = `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`

interface State {
	users: UserItemType[]
	loading: boolean
}

class App extends Component<{}, State> {
	state = {
		users: [] as UserItemType[],
		loading: false,
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

	render() {
		return (
			<div className="App">
				<Navbar title="GitHub Finder" />
				<div className="container">
					<Search searchUsers={this.searchUsers} />
					<Users
						loading={this.state.loading}
						users={this.state.users}
					/>
				</div>
			</div>
		)
	}
}

export default App
