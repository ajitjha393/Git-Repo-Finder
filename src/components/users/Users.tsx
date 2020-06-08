import React, { FC } from 'react'
import UserItem from './UserItem'
import { UserItemType } from '../../../types/index'
import Spinner from '../layout/Spinner'
interface UserProps {
	loading: boolean
	users: UserItemType[]
}

const Users: FC<UserProps> = ({ users, loading }) => {
	if (loading) {
		return <Spinner />
	} else {
		return (
			<div className="userStyles">
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		)
	}
}

export default Users
