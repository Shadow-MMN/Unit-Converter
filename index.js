/*
1 meter = 3.281 
1 liter = 0.264 gallon 
1 kilogram = 2.204 pound 
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const meterToFeet = document.getElementById("meters-to-feet")
const feetToMeter = document.getElementById("feet-to-meters")
const literToGallon = document.getElementById("liters-to-gallon")
const gallonToLiter = document.getElementById("gallon-to-liters")
const kilogramToPounds = document.getElementById("kilogram-to-pounds")
const poundsToKilogram = document.getElementById("pounds-to-kilogram")

convertBtn.addEventListener("click",function (){
    let inputValue = Number(inputEl.value) 
    if(inputValue){
        let meterToFeetCalculation = (inputValue * 3.281).toFixed(2)
        let feetToMeterCalculation = (inputValue * 0.3048).toFixed(2)
        let literToGallonCalculation = (inputValue * 0.264).toFixed(2)
        let gallonToLiterCalculation = (inputValue * 3.785).toFixed(2)
        let kilogramToPoundsCalculation = (inputValue * 2.204).toFixed(2)
        let poundsToKilogramCalculation = (inputValue *  0.4536).toFixed(2)
        meterToFeet.textContent = `${inputValue} meters = ${meterToFeetCalculation} feet  `
        feetToMeter.textContent = `  ${inputValue} feet= ${feetToMeterCalculation} meters `
        literToGallon.textContent = `${inputValue} liters = ${literToGallonCalculation} gallons  `
        gallonToLiter.textContent = `  ${inputValue} gallons = ${gallonToLiterCalculation} liters `
        kilogramToPounds.textContent = `${inputValue} kilos = ${kilogramToPoundsCalculation} Pounds  `
        poundsToKilogram.textContent = `  ${inputValue} Pounds = ${poundsToKilogramCalculation} kilos `
    } else{
         alert("Please enter a number.")
    }
})
inputEl.addEventListener("input", function () {
    
      if (isNaN(inputEl.value)) {
        alert("Only numeric values are allowed!");
        inputEl.value = "" 
    }
    inputEl.value = inputEl.value.replace(/[^0-9.]/g, "");
});
