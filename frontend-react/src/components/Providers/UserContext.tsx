import { createContext } from 'react'
interface UserContextType {
    user: null | User;
    setUser: (user: User) => void;
}
export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => { },
})
