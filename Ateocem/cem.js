 alert("É um jogo de aposta")
 var numeroDoUsuario = prompt("Digite um número")
var chegouNoCem;
if(numeroDoUsuario != null){
    let numero = +numeroDoUsuario
    let tentativas = 1
    for(; numero < 100; numero = chegouNoCem){
      let add = prompt("Outro número")
      chegouNoCem = numero + Number(add)
      tentativas++
    }
    if(numero === 100){
      alert(`Você chegou no cem em ${tentativas} tentativas parabéns`)
    }
    else if(numero >100){
      alert(`Você perdeu, suas apostas passaram de cem em ${tentativas} tentativas você chegou no número ${numero}`)
    }
  }
else{
    alert("Tenter apertar o outro botão da próxima vez")
}

