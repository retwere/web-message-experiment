import { useCallback } from "react"
import { useNotebook } from "./notebook"

function ConfirmPage() {
  const notebook = useNotebook()

  const onConfirm = useCallback(() => {
    if (!notebook?.source || !notebook?.origin) throw new Error('No notebook!')
    notebook.source.postMessage(
      {action: 'respond', value: 'foobarbaz'},
      {targetOrigin: notebook.origin}
    )
    window.close()
  }, [notebook])

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
