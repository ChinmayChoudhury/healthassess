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


def SVM():
    filename = 'finalized_model.sav'
    # pickle.dump(model, open(filename, 'wb'))
    
    # load the model from disk
    loaded_model = pickle.load(open(filename, 'rb'))

    psymptoms = [Symptom1,Symptom2,Symptom3,Symptom4,Symptom5]
    # a = np.array(df1["Symptom"])
    # b = np.array(df1["weight"])
    # for j in range(len(psymptoms)):
        # for k in range(len(a)):
            # if psymptoms[j]==a[k]:
                # psymptoms[j]=b[k]

    nulls = [0,0,0,0,0,0,0,0,0,0,0,0]
    psy = [psymptoms + nulls]

    # pred2 = loaded_model.predict(psy)
    print("Model loaded")
    # return "model"

   
        
