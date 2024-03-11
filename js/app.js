var  ValorHora = Number, salmin = 450.00, SalInicial=0, alimento
function calcular() {
    const turno = document.getElementById("turno").value
    const ID = document.getElementById("codigo").value
    const horas = document.getElementById("hora").value
    const cargo = document.getElementById("cargo").value
    console.log(turno)
    console.log(ID)
    console.log(horas)
    console.log(cargo)
    
    if(turno == "N" && cargo == "G"){
        ValorHora = salmin * 0.18
        console.log(ValorHora)
    }
    if(turno== "M" && cargo== "G" || turno == "V" && cargo == "G"){
        ValorHora = salmin * 0.15
        console.log(ValorHora)
    }
    if(turno == "N" && cargo == "O"){
        ValorHora = salmin * 0.13
        console.log(ValorHora)
    }
    if(turno== "M" && cargo== "O" || turno == "V" && cargo == "0"){
        ValorHora = salmin * 0.10
        console.log(ValorHora)
    }

    SalInicial = ValorHora * horas
    if(SalInicial<=300 && SalInicial>0){
        alimento = SalInicial * 0.20
    }
    if(SalInicial>300 && SalInicial <= 600){
        alimento = SalInicial * 0.15
    }
    if(SalInicial > 600){
        alimento = SalInicial *0.15
    }
}
