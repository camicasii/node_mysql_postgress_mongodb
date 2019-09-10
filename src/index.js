const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://camicasii:123ewqasdcxz@cluster0-sgqoa.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(uri,{
    useNewUrlParser:true
}).then(res=>console.log("paso")).catch(e=>console.log(e))


/*client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
