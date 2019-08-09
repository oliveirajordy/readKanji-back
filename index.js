const express = require('express')
const cors = require('cors')
const { converter } = require('./src/api/converter')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/static',express.static(__dirname+'/static'))

app.post('/converter', converter)

app.listen(3001, console.log('ouvindo na porta 3001'))