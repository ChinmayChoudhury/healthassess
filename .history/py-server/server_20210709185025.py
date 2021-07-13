import time
import json
import pandas
from bson import json_util
from flask import Flask
from flask import request
import json


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

other_col = dbname['city_data']

n = len(col_name.distinct("location"))


# for x in col_name.distinct("location"):
#     print(x)
#     other_col.find_one({
#         "location": x,
#         "cancer_count": 0,
#         "typhoid_count": 0
#     })

distinct_cities = []

# for x in col_name.distinct("location"):
#     print(x)
#     for y in col_name.find():
#         print(y)
#         if x == y["location"]:
#             if y["cond"] == "cancer":
#                 loc_count = other_col.find_one({"location": x})
#                 og_count = int(loc_count["cancer_count"])
#                 og_count = og_count+1
#                 other_col.find_one_and_update({"location": x},{"$set": {"cancer_count": og_count}})
#                 print("updated_canc")

#             if y["cond"] == "typhoid":
#                 loc_count = other_col.find_one({"location" : x})
#                 og_count = int(loc_count["typhoid_count"])
#                 og_count = og_count+1
#                 other_col.find_one_and_update({"location": x}, {"$set": {"typhoid_count": og_count}})
#                 print("updated_typ")


# mylist = [{
#     "name": "Jesse",
#     "location": "Mumbai", 
#     "cond": "cancer",
#     "lat": 19.0790,
#     "long": 72.8777
#     },
#     {
#     "name": "Robert",
#     "location": "Mumbai", 
#     "cond": "cancer",
#     "lat": 19.0790,
#     "long": 72.8777
#     },
#     {
#     "name": "Travis",
#     "location": "Mumbai", 
#     "cond": "typhoid",
#     "lat": 19.0790,
#     "long": 72.8777
#     },
#     {
#     "name": "Jeremy",
#     "location": "Chennai", 
#     "cond": "typhoid",
#     "lat": 13.0827,
#     "long": 80.2707
#     },
#     {
#     "name": "Aditya",
#     "location": "Chennai", 
#     "cond": "cancer",
#     "lat": 13.0827,
#     "long": 80.2707
#     },
#     {
#     "name": "Sara",
#     "location": "Chennai", 
#     "cond": "typhoid",
#     "lat": 13.0827,
#     "long": 80.2707
#     }
# ]

# x = col_name.insert_many(mylist)
# print(x.inserted_ids)



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

# @app.route('/', methods=['GET'])
# def get_data():
#     for x in col_name.find():
#         print(x)

# @app.route('/infographics') 
# def disease_data(): 
    
#     # for x in col_name.find():
#     #     print(x)
    

@app.route('/mapbox')
def mapbox_data():
    cursor = other_col.find() 
    docs = list(cursor)
    print(docs[0])
    print(json.loads(json_util.dumps(docs)))
    return {"name":json.loads(json_util.dumps(docs))}
    




if __name__ == "__main__":
    app.run()
