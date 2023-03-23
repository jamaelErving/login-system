const express = require("express");
const cors = require("cors");
const pool = require("./database");


const app = express()


app.use(express.json())
app.use(cors())

app.post("/register", (req, res) => {
    const username = req.body["username"]
    const password = req.body["password"]

    console.log("Username:" + username);
    console.log("Password:" + password);

    const insertSTMT = `INSERT INTO accounts ( username, password) VALUES ( ${"username"}, ${"password"}); `

    pool.query(insertSTMT).then((response) => {
        console.log("Data Saved")
        console.log(response);
    }).catch((err) => {
        console.log(err)
    })

    

    console.log(req.body)
    res.send("Response Received: " + req.body)
});


app.post('/' , (req, res ) => {
    const username = req.body.username;
    const password = req.body.password;


    pool.query("SELECT * FROM  accounts WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {

        if (err){
            res.send({err: err})
        } 

        
        
            if (result.length > 0) {
                res.send(result) 
            } else {
                res.send({message: "Wrong username/password combinaton "})
            }
        
    }
     );
    
});

//localhost:3000 = frontend
//localhost:4000 = backend

app.listen(4000, () => console.log("Server on localhost:4000"))