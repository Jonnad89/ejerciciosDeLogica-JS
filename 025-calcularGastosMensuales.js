// Crear una función para calcular gastos mensuales

function calcularGastosMensuales() {
    // Pedir al usuario el número de días del mes
    const numeroDeDias = parseInt(prompt("Por favor, ingresa el número de días del mes"))

    // Validar que el usuario ingrese un número válido
    if (isNaN(numeroDeDias) || numeroDeDias <= 0) {
        alert("Por favor, ingrese un número válido de días.");
        return;
    }

    // Inicializar una lista vacía para almacenar los gastos diarios
    const gastosDiarios = [];

    // Solicitar al usuario que ingrese los gastos diaros
    for (let dia = 1; dia <= numeroDeDias; dia++) {
        const gastoDiario = parseInt(prompt(`Ingresa el gasto del día ${dia}: `))

        // Validar que el usuario ingrese un número válido
        if (isNaN(gastoDiario) || gastoDiario < 0){
            alert("Por favor, ingresa un gasto válido para el día.");
            return;
        }

        gastosDiarios.push(gastoDiario)
    }

    // Calcular la suma de los gastos mensuales
    const sumaGatos = gastosDiarios.reduce((total, gasto) => total + gasto, 0);

    // Mostrar el resultado al usuario
    alert(`Total de gastos mensuales: $${sumaGatos.toFixed(2)}`)
}

// Llamar a la función para calcular los gastos mensuales
calcularGastosMensuales();