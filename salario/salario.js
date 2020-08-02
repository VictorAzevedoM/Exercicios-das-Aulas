function salario(anual, pisomes){
    let mensal = anual/12
    if(mensal < pisomes){
        return (`Seu salário é de ${mensal} reais e você recebe ${pisomes- mensal} reais a menos do que o piso mensal`)
    }
    else if(mensal > pisomes){
        return (`Seu salário é de ${mensal} reais e você recebe ${mensal - pisomes} reais a mais do que o piso mensal`)
    }
    else{
        return (`O seu salário é de ${mensal} e você recebe o equivalente para a categoria`)
    }
}