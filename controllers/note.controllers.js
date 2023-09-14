//importar NoteModel

const {NoteModel} = require('../models/note')

// crear las funciones CRUD
async function createNote(req,res){
    const {title,content,link,createdate} = req.body
    await NoteModel.create({title,content,link,createdate})
    res.send('Note Created')
}

async function ListNote(req,res){
    const allNote = await NoteModel.findAll()
    res.json(allNote)
    //res.send('Note Task')  
}

async function findNote(req,res){
    const id = req.params.id   //mismo Id de routes
    const note = await NoteModel.findByPk(id)
    if (note == null){
        return res.send('No existe Nota con el Id')
    }
    //res.send('Note Finded')
    res.json(note)
}

async function updateNote(req,res){
    const id = req.params.id   //mismo Id de routes
    const {title,content,link,createdate} = req.body
    await NoteModel.update({title,content,link,createdate},{
        where: {
            id: id //puede dejarse 1 solo id clave = valor
        }
    })
    res.send('Note Updated')
}

async function deleteNote(req,res){
    const id = req.params.id   //mismo Id de routes
    await NoteModel.destroy({
        where: {
            id: id //puede dejarse 1 solo id clave = valor
        }
    })
    res.send('Note Deleted')
}

module.exports = {
    createNote,
    ListNote,
    findNote,
    updateNote,
    deleteNote
}