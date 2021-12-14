//dado de entrada: salario bruto
let salarioBruto =3000;

//variaveis utilizadas no calculo
let aliquota;
let salarioBase; // salario depois de descontado o inss
let aliquotaIr; //
let parcelaIr;
let valorIr;
let salarioLiquido
// Valor da aliquota Inss de acordo com o salario bruto

if (salarioBruto <= 1556.94) {
    aliquota = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92 )  {
    aliquota = salarioBruto * 0.09;

}  else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82 )  {
    aliquota =salarioBruto *  0.11;

} else if (salarioBruto > 5189.82 )  {
    aliquota = 570.88;

}

//calculo do salario sem o inss
salarioBase = salarioBruto - aliquota;
console.log("Salario base = "+salarioBase);
console.log("aaaaaaaaaa");

//Verifica aliquota do Imposto e Renda

if (salarioBase <= 1903.98) {
    console.log("Isento de Imposto de Renda");
}
else if (salarioBase >1903.98 && salarioBase <= 2826.65) {
    aliquotaIr = salarioBase * 0.075;
    parcelaIr = 142.80; 

} else if (salarioBase >2826.66 && salarioBase <= 3751.05) {
    aliquotaIr = salarioBase *0.15;
    parcelaIr = 354.80;
}
else if (salarioBase >3751,06 && salarioBase <= 4664.68) {
    aliquotaIr = salarioBase *0.225;
    parcelaIr = 636.13;  
}
else if (salarioBase >4664.68) {
    aliquotaIr = salarioBase *0.275;
    parcelaIr = 869,36;  
}

valorIr = aliquotaIr - parcelaIr;
salarioLiquido = salarioBase - valorIr;

console.log("O sálario liquído é R$ " + salarioLiquido);