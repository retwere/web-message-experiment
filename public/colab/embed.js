const ORIGIN = 'https://web-message-experiment.vercel.app'

window.connectToPinecone = new Promise((resolve, reject) => {
  const iframe = document.createElement('iframe')
  document.body.appendChild(iframe)

  window.addEventListener(
    "message",
    async (event) => {
      if (event.origin !== ORIGIN) return
      if (event.data.action === 'ready') {
        iframe.postMessage({action: 'ack'}, {targetOrigin: ORIGIN})
      }
      if (event.data.action === 'cancel') {
        reject('Cancelled')
      }
      if (event.data.action === 'resize') {
        iframe.style.display = 'block'
        iframe.style.height = event.data.height
        iframe.style.width = event.data.width
      }
      if (event.data.action === 'api_key') {
        resolve(event.data.value)
      }
    }
  )

  iframe.setAttribute('src', ORIGIN)
})
