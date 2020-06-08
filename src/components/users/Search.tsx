import React, { Component, FormEvent } from 'react'

class Search extends Component {
	state = {
		text: '',
	}

	onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(this.state.text)
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
					/>
					<input
						type="submit"
						value="Search"
						className="btn btn-dark btn-block"
					/>
				</form>
			</div>
		)
	}
}

export default Search
