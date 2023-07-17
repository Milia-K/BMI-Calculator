//
let grade=document.getElementById('grade');
let average=document.getElementById('average');
let max=document.getElementById('max');
let min=document.getElementById('min');
let negative =document.getElementById('negative'); 
let letter=document.getElementById('letter');


function calculate(){

let grades = [];
console.log(grades);

//random grades
for (let i = 0; i < 12; i++) {
  grades.push(Math.floor(Math.random() * 100) + 1);
}

//average grade
let sum = grades.reduce((item, current) => item + current);
let averageGrade = Math.floor(sum / grades.length);

//max grade
let maxGrade = Math.max(...grades);

//min grade
let minGrade = Math.min(...grades);

//positive grade
let positiveGrade = grades.filter(grade => grade >= 60);
let positiveCount = positiveGrade.length;

//negative grade
let negativeGrade = grades.filter(grade => grade < 60);
let negativeCount = negativeGrade.length;

//to letter grades
let letterGrades = grades.map(grade => {
if (grade >= 80) {
        return "A";
    } else if (grade >= 60) {
        return "B";
    } else if (grade >= 40) {
        return "C";
    } else if (grade >= 20) {
        return "D";
    } else {
        return "E";
    }
});

//results
grade.textContent = grades;  
average.textContent = averageGrade;  
max.textContent = maxGrade;  
min.textContent = minGrade;  
positive.textContent = positiveCount;  
negative.textContent = negativeCount;  
letter.textContent = letterGrades;  
}

btn.addEventListener('click', calculate);