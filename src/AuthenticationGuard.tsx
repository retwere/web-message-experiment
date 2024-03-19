import { useAuth0 } from "@auth0/auth0-react"
import { Outlet, useSearchParams } from "react-router-dom"

function AuthenticationGuard() {
  const {loginWithRedirect, isAuthenticated, isLoading} = useAuth0();
  const [searchParams] = useSearchParams()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    const errorType = searchParams.get('error')
    if (errorType) {
      const errorMessage = searchParams.get('error_description')
      return <div>Authentication Error: {errorType}: {errorMessage || ''}</div>
    }
    loginWithRedirect()
    return <div>Loading...</div>
  }
  return <Outlet />
}

export default AuthenticationGuard
