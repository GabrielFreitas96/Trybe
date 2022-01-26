// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
const response = await fetch(API_URL, myObject);
const data = await response.json();
console.log(data);
addJoke(data);
return data;
  // fetch(API_URL, myObject)
  //   .then(response => response.json())
  //   .then(data => console.log(data));
};
// fetchJoke();
// const createParagraph = () => {
//   const pai = document.getElementsByName('body');
//   const paragraph = document.createElement('p');
//   paragraph.innerText = "AAAAAAAA";
//   console.log('O pai é',pai);
//   console.log('O paragrafo é', paragraph);
//   pai.appendChild(paragraph);
// };
//createParagraph(); 
const addJoke = (object) => {
const header = document.getElementById('jokeContainer');
header.innerText = object.joke;
//console.log(header)
// header.innerText = joke.
};
window.onload = () => fetchJoke();