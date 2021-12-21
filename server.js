const express = require('express');
const path = require('path')
const app = express();
const PORT = 8001;

// app.get('/', (req, res) => {
//    res.send("working")
// })

app.use(express.static(path.join(__dirname, "cosell", "dist")))

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, "cosell", "dist", "index.html"));
});


app.listen(PORT, () => {
    console.log('App listen on Port ' + PORT)
})