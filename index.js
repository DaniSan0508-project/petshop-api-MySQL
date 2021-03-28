const customExpress = require('./customExpress/customExpress');
const app = customExpress();
const mySQL = require('./config/connection');
const Tabelas = require('./config/tabelas');
const PORT = 3000;

mySQL.connect(error=>{
    if(!error){
        app.listen(PORT,()=>{
        console.log(`server running in port ${PORT} and mySQL connected`);
        })
    }else{
        console.log(error)
    }
})
    

