const { MongoClient, MongoChangeStreamError } = require('mongodb');

var mongodb=require('mongodb').MongoClient;
const url ="mongodb://localhost:27017";
const client=new MongoClient(uri);
async function run(){
    try {
        const database =client.db("EmployeeDB");
        const haiku =database.collection("Employees");
        const doc={
            title:"new record",
            content:"Added new record to DB",
        }
        const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with _id:
    ${result.insertedId}`);
        }finally{
            await client.close();
        }
}
run().catch(console.dir);