const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const db = require("mysql")


const connect = express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({ extended: true }))

let database = db.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tamil@126",
    database: "amazon"
})
database.connect(function (error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log("Database is connected")
    }
})


connect.post('/register', (request, response) => {
    let { roll, name, phone, email, password } = request.body
    let sql = 'insert into register(roll,name,phone,email,password,username)values(?,?,?,?,?,?)'
    database.query(sql, [roll, name, phone, email, password, email], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

connect.post('/login', (request, response) => {
    let { username, password } = request.body
    let sql = 'select * from register where username=?'
    database.query(sql, [username], (error, result) => {
        if (error) {
            response.send({ "status": "empty_set" })
        }
        else if (result.length > 0) {
            let username1 = result[0].username
            let password1 = result[0].password
            let id = result[0].id
            let roll = result[0].roll

            if (username1 === username && password1 === password) {
                response.send({ "status": "success", "id": id, "roll": roll })
            }
            else {
                response.send({ "status": "invalid_user" })
            }
        }
        else {
            response.send({ "status": "error" })
        }
    })
})
connect.get("/users", (request, response) => {

    let sql = 'SELECT * FROM register where roll="user"'

    database.query(sql, (error, results) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send(results)
        }
    })
})

connect.get('/getsingle/:objectId', (request, response) => {
    let { objectId } = request.params
    let sql = 'select * from products where objectId=?'
    databaseconnection.query(sql, [objectId], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
            console.log("success")
        }
    })
})

connect.post('/delete/:id', (request, response) => {
    let id = request.body.id

    let sql = 'delete from register where id=?'
    database.query(sql, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

connect.put('/userupdate/:id', (request, response) => {


    let { id } = request.params
    let { roll } = request.body
    console.log(roll)
    let sql = 'update register set roll=? where id=?'
    database.query(sql, [roll, id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})




connect.listen(3662, () => {
    console.log("Your server is running")
})