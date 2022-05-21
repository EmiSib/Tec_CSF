"use strict"

import express from 'express'
import fs from 'fs'

const app = express()
const port = 3000

app.use(express.json())
app.use('/css', express.static('./css'))
app.use('/js', express.static('./js'))

app.get('/', (request, response)=>
{
    fs.readFile('./html/helloWorld.html', 'utf8', (err, html)=>{
        if(err)
            response.status(500).send('There was an error: ' + err)
        
        response.send(html)
    })
})

app.get('/api/hello', (request, response) => 
{
    const {name} = request.query
    console.log(req.headers)
    response.send(`Hello ${name}`)
    // res.send({message: `Hello ${name}`})
})

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})