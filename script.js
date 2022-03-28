//* Declaring Variables : 
var date = new Date() ;
var dateD = date.getDate(); //Get Day
var dateM = date.getMonth()+1; //Get Month 
var dateY = date.getFullYear(); //Get Year
API  = "a177f8481c31fa96c3f95ad4f4f84610"; 
//var url = "https://api.darksky.net/forecast/[API_KEY]/[latitude], [longitude]" ;
var url = "https://api.darksky.net/forecast/`${API}`/[latitude], [longitude]" ;


/*var city =*/ document.getElementById('cityName').innerHTML ="New Cairo";
document.getElementById('dateNow').innerHTML =dateD +' '+dateM+' '+ dateY ;
//Functions Declaring : 

async function temp(API , date){
   // await 
}
/*****************
 * Toggle Button Temperature
 */

function toggleButton(){
     fDegree = 65 ; cDegree=16 ; 

    tempToggleC = document.getElementById('btnTempToggleC')/*.innerHTML*/ ;
    tempToggleF  =  document.getElementById('btnTempToggleF')/*.innerHTML*/ ; 
    temperatureText  = document.getElementById('tempText').innerHTML ;
    if (tempToggleC.addEventListener('click' , ()=>{
        temperatureText  = ((fDegree-32)* .5556 )+"<sup> O </sup> C";
        tempToggleC.style.display = "none";
        tempToggleF.style.display = "inline";

    }));
    if (tempToggleF.addEventListener('click' , ()=>{
        temperatureText  = ((cDegree*1.8)+32)  +"<sup> O </sup> F";
        tempToggleF.style.display = "none" ; 
        tempToggleC.style.display = "inline";

    }));
    return temperatureText;

}
toggleButton()
document.getElementById("weatherImg").src="images/cloudy.png"; 
/*
Celsius to Fahrenheit
to c =  (50°F - 32) x .5556 = 10°C

Fahrenheit to Celsius
to F (30°C x 1.8) + 32 = 86°F
*/