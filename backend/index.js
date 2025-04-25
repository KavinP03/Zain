const express = require('express')
const app= express()
const port = process.env.PORT || 6030
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello world")
})



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://kavinmak921:Kavin921@cluster0.nhndook.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const watches = client.db("dress").collection("shop");

    app.post("/cas", async (req,res)=>{
        const data = req.body;
        const result = await watches.insertOne(data);
        res.send(result);
    })
    app.get("/meow", async(req,res)=>{
        const foods = watches.find();
        const result = await foods.toArray();
        res.send(result);
    })
    app.get("/dog/:id", async (req,res)=>{
        const id= req.params.id;
        const filter = { _id: new ObjectId(id)};
        const result = await watches.findOne(filter);
        res.send(result);
    })
    app.patch("/fish/:id", async (req,res)=>{
        const id = req.params.id;
        const updateFoodData = req.body;
        const filter = { _id:new ObjectId(id)};

        const updateDoc = {
            $set: {
                ...updateFoodData
            },
        }
        const options = { upsert: true};
        const result = await watches.updateOne(filter,updateDoc,options);
        res.send(result);
    })
    app.delete("/cals/:id", async (req,res) => {
        const id = req.params.id;
        const filter = { _id:new ObjectId(id)};
        const result = await watches.deleteOne(filter);
        res.status(200).json({success: true,message:"data deleted successfully",result});
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    
  }
}
run().catch(console.dir);
app.listen(port,()=>{
  console.log(`connected to ${port}`)
})


