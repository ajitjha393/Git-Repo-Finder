import React, { FC, useContext } from 'react'
import UserItem from './UserItem'
import { UserItemType } from '../../../types/index'
import UserContext from '../../context/githubUsers'
import Spinner from '../layout/Spinner'

interface UserProps {
	loading: boolean
	users: UserItemType[]
}

const Users: FC<{}> = () => {
	const { loading, users } = useContext(UserContext)!

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
