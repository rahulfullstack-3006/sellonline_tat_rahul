const express=require('express');
const app=express();
const config=require('./config.json');
let portcheck=config.port
// let port=3001
const bodyParser=require('body-parser');
const baseRouter=require('./routers/route');
const cors=require('cors');
const path=require('path');
const db=require('./database/db');


app.get('/*',function(req,res){

  res.sendFile(path.join(__dirname,"client/index.html"))
})
app.use(cors({
  origin:config.serverurl
  // origin:"http://localhost:4200"

}))

app.use(bodyParser.json({limit:"50mb"}));
app.use('/api/base',baseRouter);    
// app.listen(5000, function () {
//   console.log('Example app listening on port ' + 5000 + '!');
// });
// let tester=config.port
console.log("portcheck",portcheck);//1024 minimum port
// app.listen(portcheck=>{
//   console.log("Server is listening on port",portcheck);
// })

app.listen(portcheck,()=>{
  console.log("Server is listening on port",portcheck);
})