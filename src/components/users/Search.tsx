import React, { FormEvent, FC, useState, useContext } from 'react'
import UserContext from '../../context/githubUsers'

const Search: FC<{}> = () => {
	const { searchUsers, clearUsers, setAlert } = useContext(UserContext)!
	const [text, setText] = useState('')

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (text === '') {
			return setAlert('Please Enter Something', 'light')
		}
		searchUsers(text)
	}

	return (
		<div>
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<input
					type="text"
					name="text"
					placeholder="Search Users..."
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<input
					type="submit"
					value="Search"
					className="btn btn-dark btn-block"
				/>
			</form>
			<button className="btn btn-light btn-block" onClick={clearUsers}>
				Clear
			</button>
		</div>
	)
}

export default Search
