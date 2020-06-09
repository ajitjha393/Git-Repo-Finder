import React, { FC, Fragment } from 'react'
import { ReposType } from '../../../types/index'
import RepoItem from './RepoItem'

const Repos: FC<{ repos: ReposType[] }> = ({ repos }) => {
	return (
		<Fragment>
			{repos.map((repo) => (
				<RepoItem key={repo.id} repo={repo} />
			))}
		</Fragment>
	)
}

export default Repos
