import React, { Fragment, FC } from 'react'
import Search from '../users/Search'
import Users from '../users/Users'

const Home: FC<{}> = () => {
	return (
		<Fragment>
			<Search />
			<Users />
		</Fragment>
	)
}

export default Home
