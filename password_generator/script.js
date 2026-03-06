function generatePassword(){

let length = document.getElementById("length").value;

let includeUpper = document.getElementById("uppercase").checked;
let includeLower = document.getElementById("lowercase").checked;
let includeNumbers = document.getElementById("numbers").checked;
let includeSymbols = document.getElementById("symbols").checked;

let characters = "";

if(includeUpper){
characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if(includeLower){
characters += "abcdefghijklmnopqrstuvwxyz";
}

if(includeNumbers){
characters += "0123456789";
}

if(includeSymbols){
characters += "!@#$%^&*()";
}

if(characters === ""){
alert("Select at least one option!");
return;
}

let password = "";

for(let i = 0; i < length; i++){
password += characters.charAt(Math.floor(Math.random() * characters.length));
}

document.getElementById("password").value = password;

checkStrength(password);

}

function copyPassword(){

let passwordField = document.getElementById("password");

passwordField.select();
passwordField.setSelectionRange(0,999);

navigator.clipboard.writeText(passwordField.value);

alert("Password copied!");

}

function checkStrength(password){

let strengthText = document.getElementById("strength");

if(password.length < 8){
strengthText.textContent = "Weak Password";
strengthText.style.color = "red";
}
else if(password.length < 14){
strengthText.textContent = "Medium Password";
strengthText.style.color = "orange";
}
else{
strengthText.textContent = "Strong Password";
strengthText.style.color = "lightgreen";
}

}