/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const themeEl= document.getElementById('toggle-theme')
const inputEl= document.getElementById('input')
const convertEl= document.getElementById('convert-btn')
const lenghtEl= document.getElementById('length')
const volumeEl= document.getElementById('volume')
const massEl= document.getElementById('mass')
const meter = 3.281
const liter = 0.264 
const kilogram = 2.204 


convertEl.addEventListener('click' ,()=>{
    let number=inputEl.value;
     lenghtEl.textContent=`${number} meters = ${(number*meter).toFixed(3)} | ${number} feets = ${(number/meter).toFixed(3)} meters`
     volumeEl.textContent=`${number} liters = ${(number*liter).toFixed(3)} | ${number} gallons = ${(number/liter).toFixed(3)} liters`
     massEl.textContent=`${number} kilos = ${(number*kilogram).toFixed(3)} | ${number} pounds = ${(number/kilogram).toFixed(3)} kilos`
})


themeEl.addEventListener('click' ,()=>{
    document.body.classList.toggle('dark');
    
    
})