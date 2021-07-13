import time
import json
import pandas
from bson import json_util
from flask import Flask
from flask import request
import json

from pymongo.client_options import _parse_ssl_options


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


def new_collection():


    # make a new collection
    other_col = dbname['city_data']
    for p in col_name.distinct("location"):
        #adding a entry in new coll for every distinct city in original coll
        if (p=="Mumbai"):
            other_col.insert_one({
            "location": p,
            "cancer_count": 0,
            "typhoid_count": 0,
            "lat": 19.076,
            "long": 72.8777
        })
        
        elif (p=="Chennai"):
            other_col.insert_one({
            "location": p,
            "cancer_count": 0,
            "typhoid_count": 0,
            "lat": 13.0827,
            "long": 80.2707
        })

        elif(p=="Bangalore"):
            other_col.insert_one({
            "location": p,
            "cancer_count": 0,
            "typhoid_count": 0,
            "lat": 12.9716,
            "long": 77.5946
        })

        elif(p=="Kolkata"):
            other_col.insert_one({
            "location": p,
            "cancer_count": 0,
            "typhoid_count": 0,
            "lat": 22.5726,
            "long": 88.3639
            })

        elif(p=="New Dehli"):
            other_col.insert_one({
            "location": p,
            "cancer_count": 0,
            "typhoid_count": 0,
            "lat": 28.6139,
            "long": 77.2090
            })    
            
    for x in col_name.distinct("location"):

        print(x)
        for y in col_name.find():
            print(y)
            if x == y["location"]:
                if y["cond"] == "cancer":
                    loc_count = other_col.find_one({"location": x})
                    og_count = int(loc_count["cancer_count"])+1
                    
                    other_col.find_one_and_update({"location": x},{"$set": {"cancer_count": og_count}})
                    print("updated_canc")

                if y["cond"] == "typhoid":
                    loc_count = other_col.find_one({"location" : x})
                    og_count = int(loc_count["typhoid_count"])+1
                    
                    other_col.find_one_and_update({"location": x}, {"$set": {"typhoid_count": og_count}})
                    print("updated_typ")
def barArrays():
    other_col = dbname['city_data']
    cityArray=[]
    cancerArray=[]
    typhoidArray=[]
    for x in other_col.find():
        cityArray.append(x["location"])
        cancerArray.append(x["cancer_count"])
        typhoidArray.append(x["typhoid_count"])

new_collection()
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

@app.route('/infographics') 
def disease_data(): 

    #drop new_col every time the infographics page is loaded
    # new_col = dbname['city_data']
    # new_col.drop()
    return {'name': time.time()}

    
#     # for x in col_name.find():
#     #     print(x)
    

@app.route('/mapbox')
def mapbox_data():

    # new_collection()

    #create temporary new collection
    new_col = dbname['city_data']

    cursor = new_col.find() 
    docs = list(cursor)
    # print(docs[0])
    sent_json = json.loads(json_util.dumps(docs))
    # new_col.drop()
    # print("printing sent json")
    # print(sent_json)
    return {"name":sent_json}
    
@app.route('/bargraph')
def bargraph_data():

    other_col = dbname['city_data']
    cityArray=[]
    cancerArray=[]
    typhoidArray=[]
    for x in other_col.find():
        cityArray.append(x["location"])
        cancerArray.append(x["cancer_count"])
        typhoidArray.append(x["typhoid_count"])

    print(cityArray)
    print(cancerArray)
    print(typhoidArray)
    cityArray = json.loads(json_util.dumps(cityArray))
    cancerArray = json.loads(json_util.dumps(cancerArray))
    typhoidArray = json.loads(json_util.dumps(cancerArray))
    print(cityArray)
    return {"city":cityArray, "canc":cancerArray, "typ":typhoidArray}

    # new_collection()
    # new_col = dbname['city_name']
    # cursor = new_col.find() 
    # docs = list(cursor)
    # sent_json = json.loads(json_util.dumps(docs))
    # new_col.drop()
    # return {"name":sent_json}


# @app.route('/piechart')



if __name__ == "__main__":
    app.run()
