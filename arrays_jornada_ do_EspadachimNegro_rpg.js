// Inventario inicial do aventureiro

let inventario = ["espada longa feita de aço reforçado", "armadura leve feita de titanio", "algumas nozes para reforçar o vigor", "pedaço de mapa capital", "100 moedas de ouro"]

//Exibindo o inventario inicial
console.log("seu inventario inicial:", inventario);

/*3. Encontrando um Tesouro:
"O Aventureiro encontra um baú de tesouro e ganha um novo item!"*/

//Aventureiro encontra um novo item
let novoItem = "Orbe de encantamento para aumentar os atributos";
inventario.push(novoItem);

// Exibindo o inventario atualizado
console.log("Você encontrou um baú! Novo item adicionado ao seu inventario", inventario);

/*4. Enfrentando um Inimigo:
"O aventureiro enfrenta um goblin! Ele pode usar algo do seu inventario."*/
//O Aventureira enfrenta um goblin!
console.log("Um goblin apareceu! Preparece para a batalha.");

/* Vocês tiveram uma batalha dura e parte da sua vida foi retirada.
Você pode usar uma poção de vida do seu inventario para se recuperar */

let ItemUsado2 = inventario[0];
console.log('Você ataca o goblin com seu', ItemUsado2);

/* Concluindo a Aventura:

//Finalizando a batalha*/
console.log("Você derrotou o goblin e continua sua jornada.");

