import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import User from './components/users/User'
import { UserItemType, UserType, ReposType } from '../types/index'
import './App.css'

const GITHUB_ENDPOINT = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`

interface State {
	users: UserItemType[]
	loading: boolean
	alert: null | { msg: string; type: string }
	user: UserType
	repos: ReposType[]
}

const App: FC<{}> = () => {
	const [users, setUsers] = useState([] as UserItemType[])
	const [loading, setLoading] = useState(false)
	const [alert, setAlertmsg] = useState<null | { msg: string; type: string }>(
		null
	)
	const [user, setUser] = useState({} as UserType)
	const [repos, setRepos] = useState([] as ReposType[])

	useEffect(() => {
		setLoading(true)
		;(async () => {
			const resData: UserItemType[] = (await axios.get(GITHUB_ENDPOINT))
				.data
			console.log(resData)
			setUsers(resData)
			setLoading(false)
		})()
	}, [])

	const searchUsers = async (text: string) => {
		setLoading(true)

		const resData = (
			await axios.get(
				`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
		).data.items

		console.log(resData)
		setLoading(false)
		setUsers(resData)
		// this.setState({ users: resData, loading: false })
	}

	// Get a single Github Users
	const getUser = async (username: string) => {
		setLoading(true)

		const resData = (
			await axios.get(
				`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
		).data

		console.log(resData)
		setLoading(false)
		setUser(resData)
	}

	// Get User Repos
	const getUserRepos = async (username: string) => {
		setLoading(true)

		const resData = (
			await axios.get(
				`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
		).data

		console.log(resData)
		setLoading(false)
		setRepos(resData)
		// this.setState({ repos: resData, loading: false })
	}

	// Clear users from the state
	const clearUsers = () => {
		setUsers([] as UserItemType[])
		setLoading(false)
	}

	// Alert user
	const setAlert = (msg: string, type: string) => {
		setAlertmsg({ msg, type })

		setTimeout(() => {
			setAlertmsg(null)
		}, 2000)
	}

	return (
		<Router>
			<div className="App">
				<Navbar title="GitHub Finder" />
				<div className="container">
					<Alert alert={alert} />
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Home
									searchUsers={searchUsers}
									clearUsers={clearUsers}
									setAlert={setAlert}
									loading={loading}
									users={users}
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
									getUser={getUser}
									getUserRepos={getUserRepos}
									user={user}
									repos={repos}
									loading={loading}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
