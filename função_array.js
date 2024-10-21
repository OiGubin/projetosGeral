function primeiroeultimoDivididopordois(numeros){
    const primeiro = numeros[0]/2
    const ultimo = numeros[numeros.length-1]/2
    return [ultimo,primeiro]
}
// Usando a função
const numero = [10, 20, 30, 40, 50]
const resultados = primeiroeultimoDivididopordois
(numero)
console.log(resultados)
