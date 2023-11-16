const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "seadb",
})

app.use(cors())
app.use(express.json())

app.post("/register", (req, res) => {
    const { nome } = req.body;
    const { cpf } = req.body;
    const { atividade } = req.body;
    const { cargo } = req.body;
    const { valor } = req.body;
    const { sexo } = req.body;
    const { rg } = req.body;
    const { nascimento } = req.body;
    const { epi } = req.body;
    const { ca } = req.body;
    
    
    let SQL = "INSERT INTO sea ( nome, cpf, atividade, cargo, valor, sexo, rg, nascimento, epi, ca) VALUES ( ?,?,?,?,?,?,?,?,?,? )"
    
    db.query(SQL, [nome, cpf, atividade, cargo, valor, sexo, rg, nascimento, epi, ca], (err, result) => {
        console.log(err)
    })
})

app.get("/getDados", (req, res) => {
    let SQL = "SELECT * FROM sea"

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    })
})

app.put("/edit", (req, res) => {
    const { idsea } = req.body;
    const { nome } = req.body;
    const { cpf } = req.body;
    const { atividade } = req.body;
    const { cargo } = req.body;
    const { valor } = req.body;
    const { sexo } = req.body;
    const { rg } = req.body;
    const { nascimento } = req.body;
    const { epi } = req.body;
    const { ca } = req.body;

    let SQL = "UPDATE sea SET nome= ?, cpf= ?, atividade= ?, cargo= ?, valor= ?, sexo= ?, rg= ?, nascimento= ?, epi= ?, ca= ? WHERE idsea= ?"

    db.query(SQL, [ nome, cpf, atividade, cargo, valor, sexo, rg, nascimento, epi, ca, idsea], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })

})

app.delete("/delete/:idsea", (req, res) => {
    const { idsea } = req.params;

    let SQL = "DELETE FROM sea WHERE idsea= ?"

    db.query(SQL, [idsea], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })

})

app.listen(3001, () => {
    console.log("Connected!")
})


