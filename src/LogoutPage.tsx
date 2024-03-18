import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"

function LogoutPage() {
  const {logout, isAuthenticated, isLoading} = useAuth0()
  useEffect(() => {
    if (isAuthenticated) logout()
  })
  if (isLoading || isAuthenticated) return <p>Loading...</p>
  return <p>You are now logged out.</p>
}

export default LogoutPage
