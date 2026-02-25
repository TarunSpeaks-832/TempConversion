let inputlabel=document.getElementById("inputlabel");
let toFH=document.getElementById("toFH");
let toCS=document.getElementById("toCS");
let submitbtn=document.getElementById("submitbtn");
let resultlabel=document.getElementById("resultlabel");
let temp=0;


function conversion(){

    if(toFH.checked){
        temp=Number(inputlabel.value);
        temp=temp*9/5 + 32;
        resultlabel.textContent="Temp in °F :  " + temp + "°F";
    }
    else if(toCS.checked){
        temp=Number(inputlabel.value);
        temp=(temp-32)*(5/9);
        resultlabel.textContent="Temp in °C :  " +temp + "°C";
    }
    else{
        resultlabel.textContent="please select a unit";
    }
}
