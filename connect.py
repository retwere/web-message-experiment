from IPython.display import Javascript, display
from google.colab import output

def SetApiKey(val):
  global API_KEY
  API_KEY = val

def __init__():
  SetApiKey('')
  output.register_callback('pinecone.SetApiKey', SetApiKey)
  display(Javascript(url='https://web-message-experiment.vercel.app/embed.js'))
