const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hobbies"
})

/****app.get("/", (req, res) => {
    const sql ="SELECT* FROM user";
    db.query(sql,(err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })
})***/

app.post('/login',(req, res)=>{
    const sql ="SELECT* FROM login WHERE username =? and password =?";
    db.query(sql,[req.body.email, req.body.password],(err,data)=>{
        if(err) return res.json("login faild");
        return res.json(data);
    })
})


app.listen(8081, () => {
    console.log("listening")


})