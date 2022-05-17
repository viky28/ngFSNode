const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs');
const csv = require('csv-parser');


const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
// Static directory path
//app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')))
// API root
app.use('/api', (req,res)=>{
    console.log('success')
    res.send('success')
})

app.get('/getFile', (req,res)=>{
    fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
    
    res.send({status:200, file:[]})
})
// PORT
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
// 404 Handler
app.use((req, res, next) => {
  next(createError(404))
})
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint')
})
// app.get('*', (req, res) => {
//   res.sendFile(
//     path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'),
//   )
// })
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})