
var  nascimento = Date.parse(document.getElementById("anonascimento").value)
var atual = Date.parse(document.getElementById("anoatual").value)
var anouser;

function calcular (){
    anouser = atual - nascimento
    //talvez tenha um jeito mais "simples" de converter os números
    var dataanouser = new Date(anouser)
    var idadeEmSeg = dataanouser / 1000
    var idadeEmMin = dataanouser / 60000
    var idadeEmHoras = dataanouser / 3600000
    var idadeEmDias = dataanouser / 86400000
    var idadeEmAnos = Math.floor(dataanouser / 31536000000)
    alert(`Você já viveu ${idadeEmSeg} segundos, ${idadeEmMin} minutos, ${idadeEmHoras} horas, ${idadeEmDias} dias e ${idadeEmAnos} anos `)
}
