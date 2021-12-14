// Variaveis 
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const adress = document.getElementById('adress');
const city = document.getElementById('city');
const curriculo = document.getElementById('curriculo');
const cargo = document.getElementById('cargo');
const  cargoDesc = document.getElementById('descri-cargo');
const  enviar = document.getElementById('enviar');
const  date = document.getElementById('data-inicio');
const cleanButton =  document.getElementById('limpar');

const  arrayEstates = ['Acre', 'Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe',	
'Distrito Federal'];
const estateOption = document.querySelector("#estates-option");
// console.log(estateOption);

// Cria as opções de Estados
function createOption() {
  for ( index = 0; index < arrayEstates.length; index += 1){
    let element = document.createElement('option');
    element.innerText = arrayEstates[index];
    estateOption.appendChild(element);
  }
}

createOption();



function verifica(event) {
  if (nameInput.value.length < 4 ) {
   event.preventDefault();
   console.log(nameInput);
 }
 if (isNaN((parseInt(cpf.value))) && cpf.value.length != 11) {
  event.preventDefault();
  console.log(cpf.value);
  console.log(cpf.value.length);
 }
 console.log('fora da função', cpf.value);
 console.log('fora da função', cpf.value.length);
}
enviar.addEventListener('click', verifica);


// Botão limpar

function cleanForm() {
  nameInput.value = '';
  email.value = '';
  cpf.value = '';
  adress.value = '';
  city.value = '';
  curriculo.value = '';
  cargo.value = '';
  cargoDesc.value = '';
  date.value = '';
}

cleanButton.addEventListener('click', cleanForm);


