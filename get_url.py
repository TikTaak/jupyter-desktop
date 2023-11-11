import os
import subprocess

# os.system('jupyter server list')
raw_string = subprocess.check_output('jupyter server list').decode('utf-8').split(" :: ")

print((raw_string[0][28:]))
