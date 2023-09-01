function calTemp() {
    let result;

    const enteredTemp = document.getElementById("temp").value;
    const selectedType1 = document.getElementById("tempType1").value;
    const selectedType2 = document.getElementById("tempType2").value;

    if (selectedType1 === 'celsius' && selectedType2=== 'fahrenheit') {
        result = celToFah(enteredTemp);
        document.getElementById("result").innerHTML = `${result}° Fahrenheit`;
    }else if(selectedType1 === 'celsius'  &&  selectedType2=== 'kelvin'){
        result = celToKel(enteredTemp);
        document.getElementById("result").innerHTML = `${result}° Kelvin`;
    } else if (selectedType1 === 'fahrenheit'  &&  selectedType2=== 'celsius') {
        result = fahToCel(enteredTemp);
        document.getElementById("result").innerHTML = `${result}° Celsius`;
    }else if (selectedType1 === 'fahrenheit'  &&  selectedType2=== 'kelvin') {
        result = fahToKel(enteredTemp);
        document.getElementById("result").innerHTML = `${result}° kelvin`;
    }else if (selectedType1 === 'kelvin'  &&  selectedType2=== 'celsius') {
        result = kelToCel(enteredTemp);
        document.getElementById("result").innerHTML = `${result}° Celsius`;
    }else if (selectedType1 === 'kelvin'  &&  selectedType2=== 'fahrenheit') {
        result = kelToFah(enteredTemp);
        document.getElementById("result").innerHTML = `${result}° Fahrenheit`;
    }
    else if (selectedType1 === 'celsius'  &&  selectedType2=== 'celsius') {
        alert("you've selected the same Temperature type! Try changing.");
    }
    else if (selectedType1 === 'kelvin'  &&  selectedType2=== 'kelvin') {
        alert("you've selected the same Temperature type! Try changing.");
    }
    else if (selectedType1 === 'fahrenheit'  &&  selectedType2=== 'fahrenheit') {
        alert("you've selected the same Temperature type! Try changing.");
    }  
}

function celToFah(cel) {
    let fah = Math.round((cel * 9 / 5) + 32);
    return fah;
}

function celToKel(cel){
    return (cel+273.15);
}

function fahToKel(fah){
    let kel = Math.round((fah - 32) * 5 / 9 + 273.15);
    return kel;
}

function fahToCel(fah) {
    let cel = Math.round((fah - 32) * 5 / 9);
    return cel;
}

function kelToCel(kel){
    let cel = (kel-273.15);
    return cel;
}

function kelToFah(kel){
    let fah = Math.round((kel - 273.15) * 9/5 + 32);
    return fah;
}