import { useEffect } from "react"

const createPopupListener = (source: MessageEventSource, origin: string) => (event: MessageEvent) => {
  if (event.origin !== 'https://web-message-experiment.vercel.app') return
  if (event.data.action === 'passthrough') {
    source.postMessage({ ...event.data, action: 'respond'}, {targetOrigin: origin})
  }
}

const notebookListener = (event: MessageEvent) => {
  const {source, origin, data} = event
  if (!origin.startsWith('https://') || !origin.endsWith('-colab.googleusercontent.com')) {
    return
  }
  if (data.action === 'request') {
    if (!source || !origin) throw new Error('No notebook!')
    window.addEventListener('message', createPopupListener(source, origin))
    window.open('confirm', '_blank')
  }
}

function MessageListener() {
  useEffect(() => {
    window.addEventListener("message", notebookListener)
  })
  return null;
}

export default MessageListener
