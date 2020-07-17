 alert("É um jogo de advinhação")
 var numeroDoUsuario = prompt("Digite um número")
if(numeroDoUsuario != null){
    let numero = +numeroDoUsuario
   switch (numero) {
       case numero<100:
         prompt("Tente um número maior")
           break;
           case numero>100:
             prompt("Tente um número menor")
            break;
       default:
        alert("Será que você sabe o que é um número?")
           break;
   }}
else{
    alert("Tenter apertar o outro botão da próxima vez")
}

