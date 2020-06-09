import React, { FormEvent, FC, useState } from 'react'

const Search: FC<{
	searchUsers: (text: string) => void
	clearUsers: () => void
	setAlert: (msg: string, type: string) => void
}> = ({ searchUsers, clearUsers, setAlert }) => {
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

// {
// 	state = {
// 		text: '',
// 	}
// }

export default Search
