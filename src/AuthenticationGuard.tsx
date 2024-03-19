import { withAuthenticationRequired } from "@auth0/auth0-react"
import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { useResizeMessage } from "./messages/messages"
import { MessageContext } from "./messages/utils/context"

function AuthenticationGuard() {
  const resize = useResizeMessage()
  const {targetOrigin} = useContext(MessageContext)

  const Component = withAuthenticationRequired(Outlet, {
    onBeforeAuthentication: async () => resize({width: '400px', height: '650px'}),
    onRedirecting: () => <div>Loading...</div>,
    loginOptions: {
      appState: {
        origin: targetOrigin
      }
    }
  })
  return <Component />
}

export default AuthenticationGuard
