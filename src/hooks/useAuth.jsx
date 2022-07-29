import { useContext } from "react"
import { AuthContext } from "../context"


export const useAuth = (SetterOnly) => {
    const{token, setToken}= useContext(AuthContext)
    return SetterOnly ? [setToken] : [token, setToken]
}