from IPython.display import Javascript, display
from google.colab import output

def SetApiKey(val):
  global API_KEY
  API_KEY = val

def GetApiKey():
  output.register_callback('pinecone.SetApiKey', SetApiKey)
  display(Javascript(url='https://web-message-experiment.vercel.app/embed.js'))

def __init__():
  global API_KEY
  API_KEY='val'