export function obtenerDiferenciaYear(year) {
    const yearActual = new Date().getFullYear();
    const diferencia = yearActual - year;
    return diferencia;
  }
export function calcularMarca (marca) {
    let incremento

    switch (marca) {
        case "1":
            incremento = 1.30;
            break;
        case "2":
                incremento = 1.15;
                break;
        case "3":
                    incremento = 1.05;
                    break;
        default:
            break;
    }
    return incremento
}  


export function calcularPlan(plan) {
    return (plan === "1") ? 1.20 : 1.50;
  }
  
export function formatearDinero(cantidad){
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency : 'EUR',
    })

}