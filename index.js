const express=require('express');
const app=express();
const cors=require('cors')

const port=process.env.port || 3001;

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})
app.use(express.json())

app.use(cors())
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

app.post('/',(req,res)=>{
    let r=req.body.r;
    let h=req.body.h;
    let num=req.body.num;

    let p=[]
    let p1=[]

    for (let i=0;i<num;i++){
        p.push(r*Math.cos(2*Math.PI*i/num),r*Math.sin(2*Math.PI*i/num),0)
        p1.push(r*Math.cos(2*Math.PI*(i+1)/num),r*Math.sin(2*Math.PI*(i+1)/num),0)
    }

    let coordinates=new Object;
    coordinates.p=p;
    coordinates.p1=p1;
    coordinates.h=h;
    coordinates.num=num;

    res.send(coordinates)
})