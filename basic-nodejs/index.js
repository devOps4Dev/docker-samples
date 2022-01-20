const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
   res.send('<h1>Full Cycle with javascript</h1>') 
})

app.listen(port, () => {
    console.log(`Runing in the port ${port}`)
})