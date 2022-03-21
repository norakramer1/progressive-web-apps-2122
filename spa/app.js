const http = require('http');
const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})


app.get("/", renderPage)

function renderPage(req, res) {
res.sendFile(__dirname + "/public/index.html");

}