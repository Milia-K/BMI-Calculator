let weight=document.getElementById('weight');
let height=document.getElementById('height');
let btn=document.getElementById('btn');
let result=document.querySelector('#result');

function calculateBMI(){
    let weight_value=weight.value;
    let height_value = height.value/100;
    let height_value_squared=Math.pow(height_value,2);
    let BMI=weight_value/height_value_squared;
    let BMI_tofixed=BMI.toFixed(2);
    result.textContent = BMI_tofixed;  
}

btn.addEventListener('click', calculateBMI);
