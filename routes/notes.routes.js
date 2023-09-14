// fn router, importar desde express una seccion de la routa y sacarlo del index
const {Router} =require ('express')

// creamos el router ejecunado esta fn
const router = Router()
const controlador = (req, res)=> {
    res.send("Hola")
}

router.get('/', controlador)

// Lo exportamos
module.exports = router