import React, { Fragment, FC } from 'react'
import Search from '../users/Search'
import Users from '../users/Users'

const Home: FC<any> = ({
	searchUsers,
	clearUsers,
	setAlert,
	loading,
	users,
}) => {
	return (
		<Fragment>
			<Search
				searchUsers={searchUsers}
				clearUsers={clearUsers}
				setAlert={setAlert}
			/>
			<Users loading={loading} users={users} />
		</Fragment>
	)
}

export default Home
