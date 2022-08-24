let persona = {
    nombre: "Nombre por defecto",
    edad: 0,
    mascota: {
            nombre: "Mascota por defecto",
            edad: 0,
    },
};
    
    let juandc = JSON.parse(JSON.stringify(persona));
    juandc.mascota.nombre = "Chacarron";
