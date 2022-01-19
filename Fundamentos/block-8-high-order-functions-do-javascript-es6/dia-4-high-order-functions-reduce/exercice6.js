const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(student, grade) {
  return student.reduce((acc,curent,index) => {
    acc[index]= ({name: curent, average: (grade[index].reduce((acc,curent) => acc+curent,0) / grade[index].length)});
    console.log(acc);
    // console.log(obj);
    return acc;
  },[]);
}
console.log(studentAverage(students,grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];