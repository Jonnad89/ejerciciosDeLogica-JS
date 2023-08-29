function mostrarFechaYHoraActua() {
    const fechaHoraActual = new Date();
    const fecha = fechaHoraActual.toLocaleDateString();
    const hora = fechaHoraActual.toLocaleTimeString();

    console.log("Fecha actual:", fecha);
    console.log("Hora actual:", hora);
}

mostrarFechaYHoraActua();