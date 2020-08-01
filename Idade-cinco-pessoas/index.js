let arrMedia = []
for(let i = 0; i<= 4; i++){
    let nome = prompt("Digite um nome")
    let idade= prompt("Digite uma idade")
    arrMedia.push({Nome:nome, Idade:idade})
} 
const media = arrMedia.reduce((total ,med) => total +(med.Idade)/5, 0)
alert(`A média de idade é ${media} anos`)

const maisNovo = arrMedia.sort((a,b)=> a.Idade - b.Idade)
const jsonMaisNovo = JSON.stringify(maisNovo[0])

alert(`A pessoa mais nova é ${jsonMaisNovo}`)
