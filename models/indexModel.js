const models ={
    billeteraModel: require('./billeteraCBITModel'),
    clienteModel: require('./clienteModel'),
    cuentaModel: require('./cuentaModel'),
    cuentasTyCModel: require('./cuentasTyCModel'),
    ecommerceModel: require('./ecommerceModel'),
    entidadFModel: require('./entidadFinancieraModel'),
    entornoTrabajoModel: require('./entornoTrabajoModel'),
    errorModel: require('./errorModel'),
    estadoModel: require('./estadoModel'),
    ordenCxTyCModel: require('./ordenCompra_X_TyCModel'),
    ordenCompraModel: require('./ordenCompraModel'),
    smsModel: require('./smsModel'),
    tipoAmbienteModel: require('./tipoAmbienteModel'),
    tipoEntidadFModel: require('./tipoEntidadFModel'),
    tipoIdenModel: require('./tipoIdenticacionModel'),
    transaccionModel: require('./transaccionModel'),
    tycModel: require('./tycModel')
}

module.exports = models;