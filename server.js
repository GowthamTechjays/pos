const express = require('express');
const path = require('path')
const app = express();
const PORT = 8000

app.use(express.static(path.join(__dirname, "hub", "build")))

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, "hub", "build", "index.html"));
});


app.listen(PORT, () => {
    console.log('App listen on Port ' + PORT)
})