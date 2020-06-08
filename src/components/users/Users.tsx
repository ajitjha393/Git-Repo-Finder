import React, { FC } from 'react'
import UserItem from './UserItem'
import { UserItemType } from '../../../types/index'
import Spinner from '../layout/Spinner'
interface UserProps {
	loading: boolean
	users: UserItemType[]
}

const Users: FC<UserProps> = ({ users, loading }) => {
	const userStyle = {
		display: 'grid',
		gridTemplateColumns: 'repeat(3,1fr)',
		gridGap: '1rem',
	}

	if (loading) {
		return <Spinner />
	} else {
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
