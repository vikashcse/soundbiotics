
const express=require('express')
const path = require('path')

const app=express()

app.use(express.static('soundbiotics'))


app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'soundbiotics/index.html'));
})



app.listen(3007,()=>{
console.log('server is running on port 3007')
})
