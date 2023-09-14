//importo express desde express
const express = require ('express')
const cors = require ('cors')
const morgan = require ('morgan')  

// importamos para usar BD
const {sequelize} = require('./database')

//creamos un servidor
const app = express ()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/note',require('./routes/notes.routes'))


//escucha en port 3000, pasamos un callback
app.listen(3000,()=>{
    sequelize.authenticate()
    //sequelize.sync()
        .then(()=> console.log("DB is connected"))
    .catch(err =>console.log(err))
    console.log("Server running at 3000 port....");
})
