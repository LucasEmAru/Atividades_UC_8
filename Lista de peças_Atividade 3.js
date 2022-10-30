var Listadepeças = ["Filtro de Ar","Amortecedor","Disco de freio"]


if (Listadepeças.length <10) {

    console.log( "É permitido cadastrar mais peças")

} else {
   
    console.log( "Não é permitido cadastrar mais peças")
}

let peso = 500

if (peso <100) {
    console.log ("Peso minino da peça deve ser de 100g ou mais")
}else{
    console.log ("A peça possui peso adequado")
}

let nomepeça = "Caixa de cambio"

if (nomepeça.length >2) {
    console.log ("Tamanho do nome adequado com o requesito de mais 3 caracteres")
}else{
    console.log ("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}