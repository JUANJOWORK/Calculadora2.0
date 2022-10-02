
function suma() {
  let number1 = parseFloat(document.getElementById("n1").value);
  let number2 = parseFloat(document.getElementById("n2").value);

  let result = number1 + number2;

  document.getElementById('resultado').value = result;
}

function resta() {
    let number1 = parseFloat(document.getElementById("n1").value);
    let number2 = parseFloat(document.getElementById("n2").value);
  
    let result = number1 - number2;
  
      document.getElementById('resultado').value = result;
  }


  function multi() {
    let number1 = parseFloat(document.getElementById("n1").value);
    let number2 = parseFloat(document.getElementById("n2").value);
  
    let result = number1 * number2;
  
   
      document.getElementById('resultado').value = result;
  }

  function divi() {
    let number1 = parseFloat(document.getElementById("n1").value);
    let number2 = parseFloat(document.getElementById("n2").value);
  
    let result = number1 / number2;
  
      document.getElementById('resultado').value = result;
  }