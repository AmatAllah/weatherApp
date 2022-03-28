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
var fDegree , cDegree ; 
TempToggleC = document.getElementById('btnTempToggleC').innerHTML 
TempToggleF  =  document.getElementById('btnTempToggleF').innerHTML 
tempText  = document.getElementById('tempText').innerHTML
function toggleButton(){
    if (TempToggleC.addEventListener(click , ()=>{
        tempText  = (fDegree-32)* .5556;
        TempToggleC.style.visible = "none"

    }));
    if (TempToggleF.addEventListener(click , ()=>{
        tempText  = (cDegree*1.8)+32;
        TempToggleF.style.visible = "none"


    }));

}
/*
Celsius to Fahrenheit
to c =  (50°F - 32) x .5556 = 10°C

Fahrenheit to Celsius
to F (30°C x 1.8) + 32 = 86°F
*/