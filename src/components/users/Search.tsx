import React, { Component, FormEvent } from 'react'

class Search extends Component<{
	searchUsers: (text: string) => void
	clearUsers: () => void
}> {
	state = {
		text: '',
	}

	onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		this.props.searchUsers(this.state.text)
	}

	render() {
		return (
			<div>
				<form className="form" onSubmit={(e) => this.onSubmit(e)}>
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						value={this.state.text}
						onChange={(e) =>
							this.setState({ text: e.target.value })
						}
						required
					/>
					<input
						type="submit"
						value="Search"
						className="btn btn-dark btn-block"
					/>
				</form>
				<button
					className="btn btn-light btn-block"
					onClick={this.props.clearUsers}
				>
					Clear
				</button>
			</div>
		)
	}
}

export default Search
