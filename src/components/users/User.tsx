import React, { Fragment, FC, useEffect } from 'react'
import { UserType, ReposType } from '../../../types'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'

interface UserProps {
	getUser: (username: string) => Promise<void>
	getUserRepos: (username: string) => Promise<void>
	user: UserType
	repos: ReposType[]
	loading: boolean
}

const User: FC<UserProps & RouteComponentProps<{ login: string }>> = ({
	user,
	getUser,
	getUserRepos,
	repos,
	loading,
	match,
}) => {
	useEffect(() => {
		getUser(match.params.login)
		getUserRepos(match.params.login)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const {
		avatar_url,
		html_url,
		login,
		bio,
		blog,
		followers,
		following,
		hireable,
		location,
		name,
		company,
		public_gists,
		public_repos,
	} = user

	return loading ? (
		<Spinner />
	) : (
		<Fragment>
			<Link to="/" className="btn btn-light">
				Back To Search
			</Link>
			Hireable:{' '}
			{hireable ? (
				<i className="fas fa-check text-success" />
			) : (
				<i className="fas fa-times-circle text-danger" />
			)}
			<div className="card grid-2">
				<div className="all-center">
					<img
						src={avatar_url}
						className="round-img"
						alt=""
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					<p>Location : {location}</p>
				</div>
				<div>
					{bio && (
						<Fragment>
							<h3>Bio</h3>
							<p>{bio}</p>
						</Fragment>
					)}
					<a href={html_url} className="btn btn-dark my-1">
						Visit GitHub Profile
					</a>

					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>Username: </strong> {login}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company: </strong> {company}
								</Fragment>
							)}
						</li>
						<li>
							{blog && (
								<Fragment>
									<strong>Website: </strong> {blog}
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="card text-center">
				<div className="badge badge-primary">
					Followers: {followers}
				</div>

				<div className="badge badge-success">
					Following: {following}
				</div>

				<div className="badge badge-light">
					Public Repos: {public_repos}
				</div>

				<div className="badge badge-dark">
					Public Gists: {public_gists}
				</div>
			</div>
			<Repos repos={repos} />
		</Fragment>
	)
}

export default User
