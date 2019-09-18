function myFunction(x){
  x.classList.toggle("change");
}
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

var formData = location.search;
formData = formData.substring(1, formData.length);
while (formData.indexOf("+") !== -1) {
   formData = formData.replace("+", " ");
}
formData = decodeURIComponent(formData);
var formArray = formData.split("&");
for (var i = 0; i < formArray.length; i = i + 1) {
   document.write("<p>" + formArray[i] + "</p>");
}

function val(){
if(frm.firstname.value=="")
{
  alert("Please enter your first name.")
  frm.firstname.focus();
  return false;
}
if(frm.lastname.value=="")
{
  alert("Please enter your last name.")
  frm.lastname.focus();
  return false;
}
if(frm.email.value=="")
{
	alert("Please enter your email.");
	frm.email.focus();
	return false;
}
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if (reg.test(frm.email.value) == false)
{
	alert("Please enter a valid email address.");
	frm.email.focus();
	return false;
}
if(frm.brand.value=="")
{
  alert("Please enter the shoe brand you are intending to consign.")
  frm.brand.focus();
  return false;
}
if(frm.model.value=="")
{
  alert("Please enter the model of the shoe you are intending to consign.")
}
return true;
}

$(document).ready(function() {
   $("#YourSliderContainer").divas({wingsOverlayColor: "rgba(0,0,0,0.6)"});
  });
