// importo sequalize
const {sequelize} = require ('../database')
// defino tipo de de datos 
const {DataTypes} = require('sequelize')

// creacion de una tabla
const NoteModel =sequelize.define('note',{
    title: DataTypes.STRING,
    content : DataTypes.STRING,
    link : DataTypes.TEXT,  // string limitado a 256, url mas largas de 256 caracteres?
    createdate: DataTypes.DATE
})

module.exports = {NoteModel}