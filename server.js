'use strict';
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello World!')
});

function start(port){
    app.listen(port, ()=>{
        console.log(`Server is up on ${port}`);
    })
}
// to use this outside the file we export what we need
// exports is a property inside the module object
module.exports = {
    app: app,
    start : start,
}