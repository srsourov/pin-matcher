function getPin(){
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + "";
    if(pinString.length == 4){
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}


document.getElementById("key-pad").addEventListener("click", function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if (number == "C"){
            calcInput.value = "";
        }
    }
    else {
        const previoucalcInput = calcInput.value;
        const newcalcInput = previoucalcInput + number;
        calcInput.value = newcalcInput;
    }

})


function verifyPin(){
    const pin = document.getElementById("display-pin").value;
    const typedNumbers = document.getElementById("typed-numbers").value;
    const pinMatched = document.getElementById("notify-success");
    const pinFailed = document.getElementById("notify-failed");
    if (pin == typedNumbers){
        pinMatched.style.display = "block";
        pinFailed.style.display = "none";
    }
    else {
        pinFailed.style.display = "block";
        pinMatched.style.display = "none";
    }
}