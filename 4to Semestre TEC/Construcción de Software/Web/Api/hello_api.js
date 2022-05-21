// const express = require('express');

import express  from "express"
import fs from 'fs'
const app = express()

const port = 3000;

app.get('/', (request, response) => {

    const query = request.query;
    console.log(query)
    response.send(`Hello ${query.name} ${query.surname}!`)
})

app.listen(port, () =>{

    console.log(`Example app listening on port ${port}`)
})

