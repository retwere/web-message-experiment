import { useCallback, useEffect } from "react"
import { useApiKeyMessage, useCancelMessage, useResizeMessage } from "./messages/messages"
import { useNavigate } from "react-router-dom"

function ConfirmPage() {
  const resize = useResizeMessage()
  useEffect(() => resize({width: '400px', height: '400px'}), [resize])

  const navigate = useNavigate()
  const sendKey = useApiKeyMessage(() => navigate('done'))

  const onConfirm = useCallback(() => sendKey('foobarbaz'), [sendKey])
  const onCancel = useCancelMessage()

  return <div>
    <h1>Confirm connection</h1>
    <p>
      By clicking this button, you will connect your Pinecone project <b>Foo</b> with the colab
      notebook <b>TestNotebook</b>. Make sure you trust the authors of TestNotebook before you
      proceed.
    </p>
    <div>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </div>
}

export default ConfirmPage
