import { useCallback } from "react"

function ConfirmPage() {
  const onConfirm = useCallback(() => {
    window.parent.postMessage(
      {action: 'passthrough', value: 'foobarbaz'},
      {targetOrigin: 'https://web-message-experiment.vercel.app'}
    )
    window.close()
  }, [])

  const onCancel = useCallback(() => {window.close()}, [])

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
