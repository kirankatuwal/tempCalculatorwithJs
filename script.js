const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const CelToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }
    const FahToCel = (fah) => {
        let celsius = Math.round((fah - 32) * 5 / 9);
        return celsius;
    }
    let result;
    if (valueTemp == 'cel') {
        result = CelToFah(numberTemp);
        document.getElementById('resultcontainer').innerHTML = `=${result} Fahrenheit`;
    } else {
        result = FahToCel(numberTemp);
        document.getElementById('resultcontainer').innerHTML = `=${result} celcius`;
    }

}