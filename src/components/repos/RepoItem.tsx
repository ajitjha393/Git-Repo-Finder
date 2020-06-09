import React, { FC } from 'react'

import { ReposType } from '../../../types/index'

const RepoItem: FC<{ repo: ReposType }> = ({ repo }) => {
	return (
		<div className="card">
			<h3>
				<a href={repo.html_url}>{repo.name}</a>
			</h3>
		</div>
	)
}

export default RepoItem
