import os
import subprocess

# os.system('jupyter server list')
raw_string = subprocess.check_output('cd env && cd Scripts && activate && cd ../.. && jupyter server list').decode('utf-8').split(" :: ")

print((raw_string[0][28:]))
