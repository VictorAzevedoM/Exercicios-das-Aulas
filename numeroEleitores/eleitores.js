function eleitores(validos, brancos, nulos, total){
    let percentualBranc = (brancos/total) * 100
    let percentualNull = (nulos/total)*100
    let percentualValid = (validos/total)*100   

    return(`O percentual de votos brancos é ${percentualBranc.toFixed(2)}%, O percentual de votos Nulos é ${percentualNull.toFixed(2)}%, O percentual de votos Válidos é ${percentualValid.toFixed(2)}%`)

}


