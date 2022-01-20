// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Kiwi', 'Manga', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Maça', 'Mamão'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));