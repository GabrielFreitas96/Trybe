function decode(String) {
  let resultado = String.split('');
  let resultadoFinal ='';
  //console.log(resultado);
  for (let index =0;index<String.length;index +=1){
   if ( String[index] == '1' || String[index] == '2' | String[index] == '3' | String[index] == '4' | String[index] == '5' ){
    if (String[index] == '1' ){
     resultado[index] = 'a';
     //console.log(resultado[index]);
   }
   if (String[index] == '2' ){
    resultado[index] = 'e';
    //console.log(resultado[index]);
  }
  if (String[index] == '3' ){
    resultado[index] = 'i';
    //console.log(resultado[index]);
  }
  if (String[index] == '4' ){
    resultado[index] = 'o';
    //console.log(resultado[index]);
  }
  if (String[index] == '5' ){
    resultado[index] = 'u';
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
  //let String = "H3 Th2r2!"
  //console.log(decode(String));

  module.exports = decode;