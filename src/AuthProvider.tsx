import { AppState, Auth0Provider } from "@auth0/auth0-react"
import { useCallback, useContext } from "react"
import { MessageContext } from "./messages/utils/context"
import { useNavigate } from "react-router-dom"

type AuthProviderProps = React.PropsWithChildren<Record<never, never>>

function AuthProvider({children}: AuthProviderProps) {
  const {setTargetOrigin} = useContext(MessageContext)
  const navigate = useNavigate()

  const onRedirectCallback = useCallback((appState?: AppState) => {
    setTargetOrigin(appState?.origin || '')
    navigate(appState?.returnTo || window.location.pathname)
  }, [navigate, setTargetOrigin])

  return (
    <Auth0Provider
      domain="dev-jakey-experiment.us.auth0.com"
      clientId="bZXPbfTQWl9D9E8LhtTucubUe6ng3MZs"
      authorizationParams={{redirect_uri: 'https://web-message-experiment.vercel.app/confirm'}}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default AuthProvider
