const express = require("express");
const router = express.Router();
const {
    getDetalleSolicitudes,
    getDetalleSolicitud,
    createDetalleSolicitud,
    updateDetalleSolicitud,
    deleteDetalleSolicitud
} = require("../controllers/detalleSolicitudController");

router.get('/', getDetalleSolicitudes);
router.get('/:id', getDetalleSolicitud);
router.post('/', createDetalleSolicitud);
router.patch('/:id', updateDetalleSolicitud);
router.delete('/:id', deleteDetalleSolicitud);

module.exports = router;