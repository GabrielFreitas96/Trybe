const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
const monthsYear = ({spring, summer, autumn, winter}) => {
  return [...spring,...summer,...autumn,...winter];
};
console.log(monthsYear(yearSeasons));