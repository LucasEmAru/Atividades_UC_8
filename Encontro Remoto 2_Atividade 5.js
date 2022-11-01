let Numero_de_Alunos = 35

for (let Contador = 0; Contador <= Numero_de_Alunos; Contador++){
    
    if (Contador == 0){
        console.log("Numero atuel é zero")
    }else if (Contador % 2 == 0){
    console.log (`Numero ${Contador} é PAR`)
    }else{
    console.log (`Numero ${Contador} é IMPAR`)
    }
}