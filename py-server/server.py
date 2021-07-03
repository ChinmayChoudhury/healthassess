import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/assesshealth')
def find_disease():
    return {'disease':"you may have diarahhaa"}