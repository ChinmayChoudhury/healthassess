import time
import json
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/assesshealth', methods=['POST'])
def find_disease():
    s = {"disease":"diarhaaaah"}
    # jobj = json.dumps(s)
    # print(jobj)
    req = request.get_json()
    print(req['name'])
    return {"name":req['name']}

if __name__ == "__main__":
    app.run()
