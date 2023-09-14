// crear las funciones CRUD
function createNote(req,res){
    res.send('Note Created')
}

function ListNote(req,res){
    res.send('Note Task')  
}

function findNote(req,res){
    res.send('Note Finded')
}

function updateNote(req,res){
    res.send('Note Updated')
}

function deleteNote(req,res){
    res.send('Note Deleted')
}

module.exports = {
    createNote,
    ListNote,
    findNote,
    updateNote,
    deleteNote
}