function podeEstudar(concluiuEnsinoMedio,idade,cursandoOutrafaculdade){
    return concluiuEnsinoMedio &&idade>=18 &&!cursandoOutrafaculdade}

// Dades para testar a função
let concluiuEnsinoMedio = true // sim conclui
let idade = 22 // Definindo idade
let cursandoOutrafaculdade = false // false para dizer não

// verificar se pode estudfar na faculdade
let resultado = podeEstudar(concluiuEnsinoMedio,idade,cursandoOutrafaculdade)

// exibindo o resultado
if (resultado){
    console.log('Voce pode entrar na faculdade')
}
else{
console.log('Voce não pode entrar na faculdade')}
