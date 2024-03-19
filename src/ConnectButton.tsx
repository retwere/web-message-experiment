import { useNavigate } from "react-router-dom"
import { useReadyMessage, useResizeMessage } from "./messages/messages"
import { MessageContext } from "./messages/utils/context"
import { useCallback, useContext, useEffect } from "react"

function ConnectButton() {
  const ready = useReadyMessage()
  const resize = useResizeMessage()

  useEffect(() => {
    ready()
    resize({width: '250px', height: '40px'})
  }, [ready, resize])

  const navigate = useNavigate()
  const {targetOrigin} = useContext(MessageContext)

  const onClick = useCallback(() => {
    navigate('confirm')
  }, [navigate])

  const disabled = targetOrigin === ''

  return <button onClick={onClick} disabled={disabled}>Connect to Pinecone</button>
}

export default ConnectButton