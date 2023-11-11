import os
import threading
import time


def run_jupyter():
    os.system("cd env && cd Scripts && activate && cd ../.. && python -m notebook")
def run_electron():
    os.system("npm start")

# threading.Thread(target=run_jupyter).start()
threading.Thread(target=run_electron).start()