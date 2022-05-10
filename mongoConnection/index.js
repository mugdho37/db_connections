const {MongoClient} = require('mongodb');
const url= 'mongodb+srv://test_database:12345@cluster0.hnrn4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const databaseName='myFirstDatabase'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect()
    if(result){
        console.log("Database connected", result)
    }
    db= result.db(databaseName);
    collection = db.collection('Project');
    let data = await collection.find({}).toArray();
    console.log(data)
}

getData();