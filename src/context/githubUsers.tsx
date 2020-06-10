import { createContext } from 'react'
import { UserItemType } from '../../types'

interface State {
	users: UserItemType[]
	loading: boolean
	setAlert: (msg: string, type: string) => void
	clearUsers: () => void
	searchUsers: (text: string) => Promise<void>
}

const UserContext = createContext<State | null>(null)

export const UserProvider = UserContext.Provider
export default UserContext
