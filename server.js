const express = require('express')
const app = express()

/*app.get('/', function (req, res) {
    res.mnkhnıo(__dirname+ '/index.html')
})*/
app.use(express.static('public'))
app.listen(3000)