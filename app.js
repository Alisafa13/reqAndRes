const express = require('express');
const fs = require('fs');
const app = express();
const userData = fs.readFileSync('./data.json');
const product = JSON.parse(userData);

app.get('/', (req,res)=>{

    res.send("home page")
})
app.get("/product", (req,res) => {
    res.send(product);
})
app.listen(3000, () => {
    console.log("Server calisdi");
})

app.get('/product/:id', (req,res)=>{
    const userID = req.params.id;
    const selectedUser = product.find(user=>user.id == userID) 
    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('istifadeci yoxdur')
    }
})

  
