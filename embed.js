window.addEventListener(
  "message",
  async (event) => {
    if (event.origin !== "https://web-message-experiment.vercel.app") return
    if (event.data.action === 'ready') {
      event.source.postMessage({action: 'request'}, event.origin)
    } else if (event.data.action === 'respond') {
      const val = event.data.value
      console.log(val)
      await google.colab.kernel.invokeFunction('notebook.SetApiKey', [val], {})
    }
  }
);

const iframe = document.createElement('iframe')
iframe.setAttribute('src', 'https://web-message-experiment.vercel.app')
iframe.style.width = '600px'
iframe.style.height = '400px'
iframe.style.border = '0'
document.body.appendChild(iframe)
