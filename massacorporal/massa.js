var altura = prompt("Digite sua altura")
var peso = prompt("Digite seu peso")


var massaCorp = Number(peso) / (Number(altura) * Number(altura))

if(massaCorp < 16){
    alert(`Seu IMC é de ${massaCorp} e está na categoria Baixo peso grau III`)
}
else if(massaCorp >=16 && massaCorp <= 16.99){
    alert(`Seu IMC é de ${massaCorp} e está na categoria Baixo peso grau II`)
}
else if(massaCorp >= 17 && massaCorp <= 18.49){
    alert(`Seu IMC é de ${massaCorp} e está na categoria Baixo peso grau I`)
}
else if(massaCorp >=18.50 && massaCorp <= 24.99){
    alert(`Seu IMC é de ${massaCorp} e está na categoria Peso ideal`)
}
else if(massaCorp >= 25 && massaCorp <= 29.99){
    alert(`Seu IMC é de ${massaCorp} e está na categoria Sobrepeso`)
}
else if(massaCorp >= 30 && massaCorp <= 34.99){
    alert(`Seu IMC é de ${massaCorp} e está na categoria Obesidade Grau I`)
}
else if(massaCorp >= 35 && massaCorp <= 39.99){
    alert(`Seu IMC é de ${massaCorp} e está na categoria Obesidade Grau II`)
}
else{
    alert(`Seu IMC é de ${massaCorp} e está na categoria Obesidade Grau III`)
}
