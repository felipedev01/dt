 let saldo = document.getElementById("saldoValor").innerHTML
 let saldoCard = document.getElementById("saldoCard")

 

 console.log(parseFloat(saldo))

 if(parseFloat(saldo) <= 0){

saldoCard.style.background = "#AA2834";
 }