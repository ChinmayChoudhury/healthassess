import numpy as np
from numpy import load
from numpy import save
import re
import json



#  Load saved numpy array of symptoms
data = load('symptom.npy', allow_pickle=True)

"""
symptoms are saved in the format: muscle_pain, lowercase words with underscore in between
So we replace underscore with space and capitalize() whole string to sentence case it.

"""
d = {}
for i in data:
    key = i[0]
    d[key] = [re.sub(r'_',' ',key).capitalize(), i[1]]
    # print(i)

"""
Saving the new modified array as json, this json will be used to map into dropdown for s1,s2,s3,
s4,s5 (symptoms)

"""
# d = {i[0]:i[1] for i in data}
with open('symptoms.json', 'w') as f:
    json.dump(d, f,indent=4)
# print(d)
