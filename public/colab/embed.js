const ORIGIN = 'https://web-message-experiment.vercel.app'

window.addEventListener(
  "message",
  async (event) => {
    if (event.origin !== ORIGIN) return
    if (event.data.action === 'respond') {
      const val = event.data.value
      await google.colab.kernel.invokeFunction('pinecone.SetApiKey', [val], {})
    }
  }
);

const iframe = document.createElement('iframe')
iframe.setAttribute('src', ORIGIN)
iframe.style.display = 'none'
document.body.appendChild(iframe)

const button = document.createElement('button')
button.onclick = () => {
  iframe.contentWindow.postMessage({action: 'request'}, {targetOrigin: ORIGIN})
}
button.textContent = 'Connect to Pinecone'
document.body.appendChild(button)
