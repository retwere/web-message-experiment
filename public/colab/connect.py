from IPython.display import Javascript, display
from google.colab import output

API_KEY = ''

def ConnectToPinecone():
  global API_KEY
  display(Javascript(url='https://web-message-experiment.vercel.app/colab/embed.js'))
  API_KEY = output.eval_js('connectToPinecone')
