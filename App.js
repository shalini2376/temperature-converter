let tempInput = document.getElementById("temp-input") ;
let cTemp = document.querySelector('#celciusTemp');
let fTemp = document.querySelector('#fTemp');
let kTemp = document.querySelector('#kTemp');


let convertBtn = document.querySelector('#convertBtn')

function roundNumber(number){
    return Math.round(number * 100)/100 
}

convertBtn.addEventListener('click', function() { 

    let givenTemp =  tempInput.value
    tempInStr = givenTemp.toString() 
    // console.log(tempInStr)
    tempUnit = tempInStr.slice(-1)
    // console.log(tempUnit) 
    tempInNum = Number(tempInStr.slice(0,-1))  

    if (givenTemp == ""){
        alert("Please Enter a valid Temperature")
    }

    check1 = tempUnit.toUpperCase() == "K" || tempUnit.toUpperCase() == "C" || tempUnit.toUpperCase() == "F" ;
    if (! check1){
        alert("You must enter the temperature with unit (kelvin,fahrenheit,celcius)") 
    }

    if (tempUnit.toUpperCase() === "C"){  
        let celciusTemp = parseFloat(tempInNum) 
        let fahrenheitTemp = (celciusTemp * (9 / 5)) + 32
        let kelvinTemp = celciusTemp + 273.15 
    
        cTemp.innerHTML = celciusTemp
        fTemp.innerHTML = roundNumber(fahrenheitTemp) 
        kTemp.innerHTML = roundNumber(kelvinTemp) 
        
    } 

    else if (tempUnit.toUpperCase() === "K"){
        let kelvinTemp = parseFloat(tempInNum)
        let celciusTemp = kelvinTemp - 273.15 
        let fahrenheitTemp = (kelvinTemp - 273.15) * (9 / 5) + 32

        kTemp.innerHTML = kelvinTemp
        cTemp.innerHTML = roundNumber(celciusTemp)
        fTemp.innerHTML = roundNumber(fahrenheitTemp) 
        
    } 

    else if (tempUnit.toUpperCase() === "F"){
        let fahrenheitTemp = parseFloat(tempInNum)
        let celciusTemp = (fahrenheitTemp - 32) * (5 / 9)
        let kelvinTemp = (fahrenheitTemp - 32) * (5 / 9) + 273.15

        fTemp.innerHTML = fahrenheitTemp 
        cTemp.innerHTML = roundNumber(celciusTemp)
        kTemp.innerHTML = roundNumber(kelvinTemp)
        
    }
    tempInput.value = "";
})

