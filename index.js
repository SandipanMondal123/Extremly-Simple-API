const express = require('express');
const app = express();
const PORT = 8080


app.use(express.json()); // converts body to JSON

app.get("", (req, res) => {
    res.status(200).send({"message": "This is the get request" })
})

app.post("/book/:id", (req, res) => {
    const { id } = req.params;
    const {body} = req.body;

    if(!body){
        res.send({error: `NO BODY`})
    }
   
        res.send({message: `this is your post response ${id}`, body: `this is your body message -> ${body}`})
    
})

app.listen(PORT || 50000, () => console.log(`RUNNING on PORT ${PORT}`))