import React, { Component } from 'react'
import UserItem from './UserItem'
import { UserItemType } from '../../../types/index'

interface UserProps {
	loading: boolean
	users: UserItemType[]
}

class Users extends Component<UserProps> {
	render() {
		const { users } = this.props

		const userStyle = {
			display: 'grid',
			gridTemplateColumns: 'repeat(3,1fr)',
			gridGap: '1rem',
		}
		return (
			<div style={userStyle}>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		)
	}
}

export default Users
