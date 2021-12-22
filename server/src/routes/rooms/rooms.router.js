const { Router } = require('express')
const router = Router()

router.route('/')
    .get((req, res) => {
        res.json('Lista de habitaciones')
    })
    .post((req, res) => {
        res.json('Agregar habitaciones')
    })
router.route('/:id')
    .put((req, res) => {
        res.json('Editar de habitaciones')
    })
    .delete((req, res) => {
        res.json('Eliminar de habitaciones')
    })

module.exports = router