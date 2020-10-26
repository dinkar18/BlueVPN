document.addEventListener("DOMContentLoaded", function(event) { 
    
    document.querySelector('div').scrollIntoView({ 
        behavior: 'smooth' 
      });








     





















    ///////////////////////////////// Clock//////////////////////


    var countDownDate = new Date("Aug 13, 2019 23:59:59").getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML = days + "D : " + hours + "H : "
      + minutes + "M : " + seconds + "S ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
    
    



////////////////login



var user = document.getElementById('usname').value;
var pass = document.getElementById('uspass').value;
var btn = document.getElementsByClassName('btn3');
function authenticate(form){
  if(form.user.value == "salar" && form.pass.value== "123"){
    window.open("pricing.html");
  }else{
    alert("Please enter valid id and password");
  }
}




























});










/* var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("usname").value;
var password = document.getElementById("uspass").value;
console.log(username);


if ( username == "salar@gmail.com" && password == "123"){
alert ("Login successfully");
window.location = "pricing.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("usname").disabled = true;
document.getElementById("uspass").disabled = true;
document.getElementsByClassName("btn3").disabled = true;
return false;
}
}
} */
