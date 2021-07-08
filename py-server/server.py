import time
import json
from flask import Flask
from flask import request
import DiseasePrediction
# import mytest
app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/assesshealth', methods=['POST'])
def find_disease():
    s = {"disease":"diarhaaaah"}
    # jobj = json.dumps(s)
    # print(jobj)
    req = dict(request.get_json())
    res = DiseasePrediction.SVM(req['s1'],req['s2'],req['s3'],req['s4'], req['s5'])
    # print(req)
    # print(res)
    print("response",res)
    return {"name":res}

if __name__ == "__main__":
    app.run()
