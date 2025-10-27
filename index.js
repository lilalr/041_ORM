const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');
const { raw } = require('mysql2');

app.use(express.json());
app.use(express.urlencoded({ 
    extended: false 
})
);

app.listen(PORT, () => {
    console.log("Server started on port 3000");
});

db.sequelize.sync()
    .then((result) => {
        app.listen(3000, () => {
            console.log("Server started");
        })
        })
        .catch((err) => {
            console.log(err);
        });

app.post("/komik", async(req, res)=>{
    const dara = req.body;
    try{
        const komik = await db.Komik.create(data);
        res.send(komik);
    } catch(err){
        res.send(err);
    }
})

app.get("/komik", async(req, res)=>{
    try{
        const komik = await db.Komik.findAll();
        res.send(komik);
    } catch(err){
        res.send(err);
    }
})


