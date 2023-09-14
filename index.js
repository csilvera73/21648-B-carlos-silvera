//importo express desde express
const express = require ('express') 

//creamos un servidor
const app = express ()

app.use('Notes',require('./routes/notes.routes'))


//escucha en port 3000, pasamos un callback
app.listen(3000,()=>{
    console.log("Server running at 3000 port....");
})
