import { useEffect } from "react"
import { Notebook } from "./notebook"

type MessageListenerProps = {
  setNotebook: (notebook: Notebook) => void
}

function MessageListener({setNotebook}: MessageListenerProps) {
  useEffect(() => {
    // listen for the request from colab notebook
    window.addEventListener("message", (event) => {
      const {source, origin, data} = event
      if (!origin.startsWith('https://') || !origin.endsWith('-colab.googleusercontent.com')) {
        return
      }
      if (data.action === 'request') {
        if (!source || !origin) throw new Error('No notebook!')
        setNotebook({source, origin})
        window.open('confirm', '_blank')
      }
    })
  })
  return null;
}

export default MessageListener
