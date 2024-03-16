
document.addEventListener('keydown', function (event) {
 const key = event.key;
  console.log("key is "+key);
 if (key.match(/[0-9+\-*/]|Enter|Backspace|Escape/)) {
    event.preventDefault(); // Prevent default action for certain keys
   if (key === 'Enter') {
     calculateResult();
   } else if (key === 'Backspace') {
     clearDisplay();
   } else if (key === 'Escape') {
     document.getElementById('result').value = '';
   } 
     else {
     appendToDisplay(key);
   }


 }
 else if(key.match(/[^0-9+\-*/]/)){
              alertMsg();
                             }
 
});

function appendToDisplay(value) {
 document.getElementById('result').value += value; 
 
}

function clearDisplay() {
 document.getElementById('result').value = '';
} 


function calculateResult() {
 try {
   const result = eval(document.getElementById('result').value);
   document.getElementById('result').value = result;
 } catch (value) {
    document.getElementById('result').value = 'Error';
 }
} 

function alertMessage(){
var char=document.getElementById('result').value;
console.log(char);
if(char!=Number){
 alert("Only numbers are allowed");
}
}

function alertMsg(){
alert("Only numbers are allowed");
}








