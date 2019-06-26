let frase =  "É pau é pedra é o fim do caminho"

function inverter(str){
    var a = str.split(" ").reverse().join(" ")
    console.log(a)
}

console.log(inverter(frase))