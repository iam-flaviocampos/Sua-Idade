/*
Idades
1-3 -> bebê
4-11 -> criança
12-14 -> pré-adolescente
15-17 -> adolescente
18-24 -> jovem adulto
25-60 -> adulto
61-100 -> idoso
*/

function idade(id){
    if (id <= 3){
        console.log('Você tem: ' + id + ' anos, você é um bebê')
    } 
    else if (id >= 4 && id <= 11){
        console.log('Você tem: ' + id + ' anos, você é uma criança')
    } 
    else if (id >= 12 && id <= 14){
        console.log('Você tem: ' + id + ' anos, você é um pré-adolescente')
    } 
    else if (id >= 15 && id <= 17){
        console.log('Você tem: ' + id + ' anos, você é um adolescente')
    } 
    else if (id >= 18 && id <= 24){
        console.log('Você tem: ' + id + ' anos, você é um jovem adulto')
    } 
    else if (id >= 25 && id <= 60){
        console.log('Você tem: ' + id + ' anos, você é um adulto')
    } 
    else if (id >= 61 && id <= 100){
        console.log('Você tem: ' + id + ' anos, você é um idoso')
    } 
    else if (id > 101 && id < 124){
        console.log('Parabéns, você tem: ' + id + ' anos, poucos chegaram a esta idade')
    } else if (id > 125 && id < 200){
        console.log('Você tem: ' + id + ' anos, como foi a vida com os dinossauros? kkk')
    }
    else {
        console.log('Idade Inválida ou você é um vampiro')
    }
}

idade(2)
console.log('-----------------')
idade(7)
console.log('-----------------')
idade(13)
console.log('-----------------')
idade(16)
console.log('-----------------')
idade(21)
console.log('-----------------')
idade(30)
console.log('-----------------')
idade(96)
console.log('-----------------')
idade(118)
console.log('-----------------')
idade(130)
console.log('-----------------')
idade(202)

