const mongoose=require("mongoose");
const mongo_url=process.env.MONGO
mongoose.connect(mongo_url)
.then(()=>{
    console.log("Mongodb connected...")
})
.catch((err)=>[
    console.log("Mongodb Connection error",err)
])