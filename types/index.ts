export interface UserItemType {
	id: string
	login: string
	avatar_url: string
	html_url: string
}

export interface UserType {
	name: string
	avatar_url: string
	location: string
	bio: string
	blog: string
	login: string
	html_url: string
	company: null | string
	followers: number
	following: number
	public_repos: number
	public_gists: number
	hireable: boolean
}
