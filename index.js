const express = require('express');
const app = express();
const PORT = 8080


app.use(express.json()); // converts body to JSON

app.get("", (req, res) => {
    res.status(200).send({"message": "This is the get request" })
})

app.post("/book/:id", (req, res) => {
    const { id } = req.params;
    const {tom} = req.body;
    
    if(!tom){
        res.send({error: `NO BODY`})
    }else{
        res.send({message: `this is your post response ${id}`, body: `this is your body message -> ${tom}`})
    }
   
    
    
})

app.listen(PORT || 50000, () => console.log(`RUNNING on PORT ${PORT}`))