//Dificuldade fácil
document.getElementById("facil").addEventListener("click",function easy(){
  //função para gerar o número
  function advinha(){
   return (Math.floor(Math.random() *9 + 0))
  }
  var aleatorio = advinha()
  var tentativas = 0;
  //o número que o usúario coloca
  var aposta = window.prompt("Digite um número de 0 a 9", "")
   if (aposta != null){
  //variável para converter a string em número 
   var numero = +aposta
    do{
      var aleatorio = advinha()
      console.log(aleatorio)
      tentativas++;
    }while(aleatorio != numero) 
  window.alert(`O número que você escolheu foi ${aposta} e o computador precisou de ${tentativas} tentativas para descobrir`)}
  else{
    window.alert("Não tem como jogar assim")
  }

})
//Dificuldade difícil
document.getElementById("dificil").addEventListener("click", function hard(){
  function advinha(){
  return (Math.floor(Math.random() *99 + 0))
 }
 var aleatorio = advinha()
var tentativas = 0;
var aposta = window.prompt("Digite um número de 0 a 99", "0")
 if (aposta != null){
 var numero = +aposta
  do{
    var aleatorio = advinha()
    console.log(aleatorio)
    tentativas++;
  }while(aleatorio != numero) 
window.alert(`O número que você escolheu foi ${aposta} e o computador precisou de ${tentativas} tentativas para descobrir`)}
else{
  window.alert("Não tem como jogar assim")
}
})



