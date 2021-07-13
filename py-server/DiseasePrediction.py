# -*- coding: utf-8 -*-
"""
Created on Fri May 21 22:21:57 2021

@author: kunal
"""
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
import pickle
import json


def SVM(Symptom1, Symptom2, Symptom3, Symptom4, Symptom5):
    filename = 'finalized_model.sav'
    # pickle.dump(model, open(filename, 'wb'))
    
    # load the model from disk
    loaded_model = pickle.load(open(filename, 'rb'))

    with open('symptoms.json') as f:
        data = json.load(f)

    psymptoms = [Symptom1,Symptom2,Symptom3,Symptom4,Symptom5]
    for i in range(5):
        psymptoms[i] = data[psymptoms[i]][1]

    nulls = [0,0,0,0,0,0,0,0,0,0,0,0]
    psy = [psymptoms + nulls]

    pred2 = loaded_model.predict(psy)
    print(psy,pred2)
    return pred2[0]
    # return "model"

   
        
