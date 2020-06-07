import React, { FC } from 'react'

interface NavBarProps {
	title: string
}

const Navbar: FC<NavBarProps> = (props) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className="fab fa-github " /> {props.title}
			</h1>
		</nav>
	)
}
export default Navbar
