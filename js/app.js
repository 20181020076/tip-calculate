let inputBill = document.getElementById("bill");
let buttonTips = document.getElementsByClassName("boton_tip");
let buttonReset = document.getElementById("reset");
let tipValue = 5;
let numeroPersonas = document.getElementById("numeroPersonas");
let montoTip = document.getElementById('person');
let montoTotal = document.getElementById('total');
function actualiza(tip, bill){
    
    montoTip.innerHTML = ((bill*tip/100)/parseInt(numeroPersonas.value)).toFixed(2);
    montoTotal.innerHTML = ((bill+(bill*tip/100))/parseInt(numeroPersonas.value)).toFixed(2);
}

Array.from(buttonTips).forEach(element => {
    element.addEventListener('click', event=>{
        Array.from(buttonTips).forEach(e=>{
            e.classList.remove("boton_tip--selected");
        });
        element.classList.add("boton_tip--selected");
        let billValue = inputBill.value;
        if(billValue==""){
            billValue = 0;
        }else{
            billValue=parseInt(billValue);
        }
        if(event.target.innerText=="Custom"){
            tipValue = parseInt(prompt("tip porcentage: "));
            actualiza(tipValue,billValue);
        }else{
            tipValue = parseInt(event.target.innerText.slice(0,-1));
            actualiza(tipValue,billValue);
        }
    });
});
inputBill.addEventListener('input',()=>{
    billValue= inputBill.value;
    if(billValue==""){
        montoTip.innerHTML=0;
        montoTotal.innerHTML=0;
    }else{
        billValue= parseFloat(inputBill.value);
        actualiza(tipValue,billValue);
    }
});
numeroPersonas.addEventListener('input',()=>{
    billValue= parseFloat(inputBill.value);
    
    if(numeroPersonas.value==""){
        montoTip.innerHTML=0;
        montoTotal.innerHTML=0;
    }else if(numeroPersonas.value==0){
        alert("digite numero de personas valido");
        numeroPersonas.value=1;
        actualiza(tipValue,billValue);
    }else{
        actualiza(tipValue,billValue);
    }
    
});

