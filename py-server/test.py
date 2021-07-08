import json

with open('symptoms.json') as f:
    data = json.load(f)

print(data)