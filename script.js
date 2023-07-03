let weight=document.getElementById('weight');
let height=document.getElementById('height');
let btn=document.getElementById('button');
let result=document.querySelector('#result');

function calculateBMI(){
    let w=weight.value;
    let h= height.value/100;
    let x=Math.pow(h,2);
    let y=w/x;
    let z=y.toFixed(2);
    console.log(z);
    result.textContent = z;  
}

btn.addEventListener('click', calculateBMI);
