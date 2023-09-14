// fn router, importar desde express una seccion de la routa y sacarlo del index
const {Router} =require ('express')

// importo funcionalidades
const {
    createNote,
    ListNote,
    findNote,
    updateNote,
    deleteNote
} = require ('../controllers/note.controllers')

// creamos el router ejecunado esta fn
const router = Router()

router.get('/',ListNote)
router.get('/:id',findNote) //parametro dinamico
router.post('/',createNote)
router.put('/:id',updateNote)
router.delete('/:id',deleteNote)


// Lo exportamos
module.exports = router