const app=require('./app');
const db = require('./config/db')
const port=3500;

app.get('/',(req,res)=>{
    res.end('something')
});

app.listen(port,()=>{
    console.log('Server listening on port http://localhost:3500');
});

