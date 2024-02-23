import { useAuthContext } from "./authHooks";
export const useLogout = () => {
      const { dispatch } = useAuthContext()
      const logout = () => {
            // remove user in localstorage
            localStorage.removeItem('user')

            // dispatch logout action
            dispatch({ type: 'LOGOUT' })
      }
      return { logout }
}