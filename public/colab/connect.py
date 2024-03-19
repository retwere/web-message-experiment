from IPython.display import Javascript, display
from google.colab import output

def ConnectToPinecone():
  display(Javascript(url='https://web-message-experiment.vercel.app/colab/embed.js'))
  return output.eval_js('connectToPinecone')
