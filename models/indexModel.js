const SubtipoProducto = require('./subtipoProductoModel');

const models ={
    anexosModel: require('./anexosModel'),
    billeteraModel: require('./billeteraCBITModel'),
    ciudadModel: require("./ciudadModel"),
    clienteModel: require('./clienteModel'),
    departamentoModel: require('./departamentoModel'),
    ecommerceModel: require('./ecommerceModel'),
    entidadFModel: require('./entidadFinancieraModel'),
    entornoTrabajoModel: require('./entornoTrabajoModel'),
    errorModel: require('./errorModel'),
    estadoModel: require('./estadoModel'),
    ordenCxTyCModel: require('./ordenCompra_X_TyCModel'),
    ordenCompraModel: require('./ordenCompraModel'),
    paisModel: require('./paisModel'),
    productoModel: require('./productoModel'),
    productoTyCModel: require('./productosTyCModel'),
    smsModel: require('./smsModel'),
    tipoAmbienteModel: require('./tipoAmbienteModel'),
    tipoEntidadFModel: require('./tipoEntidadFModel'),
    tipoIdenModel: require('./tipoIdenticacionModel'),
    tipoProductoModel: require('./tipoProductoModel'),
    tipoTransaccionModel: require('./tipoTransaccionModel'),
    transaccionModel: require('./transaccionModel'),
    tycModel: require('./tycModel'),
    tipoClienteModel: require('./tipoClienteModel'),
    subtipoProductoModel: require('./subtipoProductoModel'),
}

module.exports = models;