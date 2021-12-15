// Desafio 9
function encode(String) {
  let resultado = String.split('');
  let resultadoFinal ='';
  //console.log(resultado);
  for (let index =0;index<String.length;index +=1){
   if ( String[index] == 'a' || String[index] == 'e' | String[index] == 'i' | String[index] == 'o' | String[index] == 'u' ){
    if (String[index] == 'a' ){
     resultado[index] = '1';
     //console.log(resultado[index]);
   }
   if (String[index] == 'e' ){
    resultado[index] = '2';
    //console.log(resultado[index]);
  }
  if (String[index] == 'i' ){
    resultado[index] = '3';
    //console.log(resultado[index]);
  }
  if (String[index] == 'o' ){
    resultado[index] = '4';
    //console.log(resultado[index]);
  }
  if (String[index] == 'u' ){
    resultado[index] = '5';
    //console.log(resultado[index]);
  }
  } else {
    resultado[index] = String[index];
    //console.log(resultado[index]);
  }
  //console.log(resultado);
  resultadoFinal = resultadoFinal +resultado[index];
  }
  
    return resultadoFinal;
  }
  
//let String = "Hi There!"
console.log(encode('aeiou'));
  
module.exports = encode;
  

