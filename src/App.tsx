import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import { UserItemType } from '../types/index'
import './App.css'

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

		const resData: UserItemType[] = (
			await axios.get('https://api.github.com/users')
		).data
		console.log(resData)
		this.setState({ users: resData, loading: false })
	}

	render() {
		return (
			<div className="App">
				<Navbar title="GitHub Finder" />
				<div className="container">
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
