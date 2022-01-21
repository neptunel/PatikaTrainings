

var myName=prompt("Isminizi giriniz:")
const nameField= document.getElementById("myName")

nameField.innerHTML= myName;


const date=document.getElementById("myClock")
const weekdays = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

function showTime(){
    setTimeout(function() {   
        const d = new Date();
        const n = d.toLocaleTimeString();
        date.innerHTML = n; 
        let day= weekdays[d.getDay()-1];
        showTime();   
        date.innerHTML += " "+day;       
      }, 1000)
    }
    showTime();      