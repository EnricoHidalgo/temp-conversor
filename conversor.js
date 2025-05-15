document.getElementById('cvt').onclick = tempCvt;
document.getElementById('cl').onclick = cltTxt;

function tempCvt(){
    let fahr = document.getElementById('Farenheit').value;
    let cels = document.getElementById('Celsius').value;

    if(fahr !== '' && cels !== '') {
    alert("Digite apenas um dos campos.")
    return;
    }
    


    if(isNaN(fahr) || isNaN(cels)){
        alert("Digite um valor válido.");
        return;
    }else if(fahr === ''){
        fahr = (parseFloat(cels) * 5/9) + 32;
    }else if(cels === ''){
        cels = (parseFloat(fahr) - 32) * 5/9;
    }



    document.getElementById('Farenheit').value = parseFloat(fahr).toFixed(2);
    document.getElementById('Celsius').value = parseFloat(cels).toFixed(2);

}

function cltTxt(){
    document.getElementById('Farenheit').value = "";
    document.getElementById('Celsius').value = "";
}
