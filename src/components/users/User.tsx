import React, { Component } from 'react'
import { UserType } from '../../../types'
import { RouteComponentProps } from 'react-router'

interface UserProps {
	getUser: (username: string) => Promise<void>
	user: UserType
	loading: boolean
}

class User extends Component<
	UserProps & RouteComponentProps<{ login: string }>
> {
	componentDidMount() {
		const { getUser } = this.props
		getUser(this.props.match.params.login)
	}

	render() {
		const {
			avatar_url,
			html_url,
			login,
			bio,
			blog,
			followers,
			following,
			hireable,
			location,
			name,
			public_gists,
			public_repos,
		} = this.props.user

		const { loading } = this.props

		return <div>{name}</div>
	}
}

export default User
