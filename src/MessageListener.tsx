import { useEffect } from "react"

function MessageListener() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (!event.origin.startsWith('https://') || !event.origin.endsWith('-colab.googleusercontent.com')) {
        return
      }
      if (event.data.action === 'request') {
        event.source?.postMessage({action: 'respond', value: 'foobarbaz'}, {targetOrigin: event.origin})
      }
    })
  })
  return null;
}

export default MessageListener
