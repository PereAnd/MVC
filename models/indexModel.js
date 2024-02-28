const models ={
    billeteraModel: require('./billeteraCBITModel'),
    clienteModel: require('./clienteModel'),
    cuentaModel: require('./cuentaModel'),
    ecommerceModel: require('./ecommerceModel'),
    entidadFModel: require('./entidadFinancieraModel'),
    ordenCxTyCModel: require('./ordenCompra_X_TyCModel'),
    ordenCompraModel: require('./ordenCompraModel'),
    smsModel: require('./smsModel'),
    tipoIdenModel: require('./tipoIdenticacionModel'),
    tycModel: require('./tycModel'),
    tipoAmbienteModel: require('./tipoAmbienteModel'),
    errorModel: require('./errorModel'),
    entornoTrabajoModel: require('./entornoTrabajoModel'),
    cuentasTyCModel: require('./cuentasTyCModel')
}

module.exports = models;