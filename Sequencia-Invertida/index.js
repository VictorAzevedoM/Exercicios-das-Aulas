let comparar = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let sequencia = []
let contadorErros = 0
//loop para adcionar elementos no array e comparar com o outro
for(let i = 0; i <= 9; i++){
    //Adcionando os valores no array 
    var seqUser = prompt("Digite um número") 
    sequencia.push(seqUser)
   //comparando os dois arrays
    if(sequencia[i] != comparar[i]){
        alert("Você digitou o número errado")
    }else{
        alert("Você digitou o número certo, continue assim")
    }
}
//Comparação final
for(let i = 0; i <= 9; i++){
    if(sequencia[i] != comparar[i]){
       contadorErros++
    }
}
if(contadorErros >= 1){
    alert(`Você deve ter errado algum número pelo caminho, lembra qual foi? 
     Esse é o número de vezes que você errou ${contadorErros}`)
}else{
    alert("Você deve ser algum tipo de Prodígio, conseguiu contar de 10 até 1 sem errar")
}