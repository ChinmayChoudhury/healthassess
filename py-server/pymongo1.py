import pymongo
from pymongo import MongoClient


# Provide the mongodb atlas url to connect python to mongodb using pymongo
#CONNECTION_STRING = "mongodb+srv://eeshan22:pandey123@cluster0.jlqix.mongodb.net/health_assess?"
CONNECTION_STRING = "mongodb+srv://assess:devilinadress@cluster0.jlqix.mongodb.net/health_assess?retryWrites=true&w=majority"

# Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient

client = MongoClient(CONNECTION_STRING)
print(client)
mydb=client["health_assess"]

# mydb = client["health_assess2"]
mycol = mydb['assess2']

mylist = {
"_id": 0,
"name": "Eeshan",
"location": "Mumbai", 
"cond": "cancer"
}

mycol.insert_one(mylist)

# # x = mycol.insert_one(mylist)
# print(x.inserted_ids)




