function validateInputs() {
    // Get input values
    var input1 = document.getElementById('inputName').value;
    var input2 = document.getElementById('inputEmail').value;
    var input3 = document.getElementById('inputPhone').value;
    var input4 = document.getElementById('inputText').value;

    // Check if all inputs are not empty 
    if (input1 && input2 && input3 && input4) {
      alert('Inputs are valid.');
    } else {
      alert('All inputs must be non-empty .');
    }
  }