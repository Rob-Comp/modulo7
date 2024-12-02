import VehiculoClass from './vehiculoClass.js';
console.log(VehiculoClass);

(async () => {
    // const crear = VehiculoClass.crearTablas();
    // if (crear) {
    //     console.log(`<--- Creando las tablas del sistema --->`);
    // }else{
    //     console.log('No se crearon las tablas');
    // }
    const vehiculo1 = new VehiculoClass('Toyota','Etios', 'VZA123');

    const registrar = vehiculo1.insertar(vehiculo1);
})();

