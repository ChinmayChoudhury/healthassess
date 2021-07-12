import time
import json
from flask import Flask
from flask import request


app = Flask(__name__)

def get_database():
    from pymongo import MongoClient
    import pymongo

    CONNECTION_STRING = "mongodb+srv://assess:D8hsxxi53UjxmyYl@cluster0.jlqix.mongodb.net/health_assess?retryWrites=true&w=majority"
    # Create a connection using MongoClient.
    client = MongoClient(CONNECTION_STRING)

    return client['health_assess']

# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":    
    # Get the database
    dbname = get_database()    

col_name = dbname['asses1']
# mylist = {
#     "name": "Eeshan",
#     "location": "Mumbai", 
#     "cond": "cancer"
#     }

# x = col_name.insert_one(mylist)
# print(x.inserted_id)



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

@app.route('/', methods=['GET'])
def get_data():
    for x in col_name.find():
        print(x)

@app.route('/infographics', methods = ['POST']) 
def disease_data(): 
    data = request.get_json() 
    print(data) 
    # # do something with this data variable that contains the data from the node server 
    # return json.dumps({"newdata":"hereisthenewdatayouwanttosend"})

    for x in col_name.find():
        print(x)
    return {"name":"hello"}



if __name__ == "__main__":
    app.run()
