import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface NavBarProps {
	title: string
}

const Navbar: FC<NavBarProps> = (props) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className="fab fa-github " /> {props.title}
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	)
}
export default Navbar
