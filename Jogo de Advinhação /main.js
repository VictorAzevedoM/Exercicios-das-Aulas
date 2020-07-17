 var aposta = window.prompt("Digite um número de 0 a 9", "0")
 var aleatorio;
 var tentativas = 0
if (numeros != null ){
    var numero = +aposta
     do{
         function advinha(){
            aleatorio = Math.floor(Math.random() *10 + 1)
            tentativas++
         }}while ( numero != aleatorio);
  window.alert(tentativas)}
  else{
    window.alert("Não tem como jogar assim")}
