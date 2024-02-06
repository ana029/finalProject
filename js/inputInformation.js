  function validateForm() {
    // Get input values
    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var phone = document.getElementById('inputPhone').value;
    var subject = document.getElementById('inputSubject').value;
    var message = document.getElementById('messagetext').value;

    // Check if all inputs are non-empty
    if (!name || !email || !phone || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Check phone number format (+995 and 9 digits)
    var phoneRegex = /^\+995\d{9}$/;
    if (!phone.match(phoneRegex)) {
      alert('Phone number must start with +995 and be 9 digits long.');
      return;
    }

    // Check email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Check subject length
    if (subject.length <= 5) {
      alert('Subject must be more than 5 characters.');
      return;
    }

    // If all validations pass, you can proceed with form submission or further actions
    alert('Form is valid. Submitting...'); // Replace with actual form submission code
  }
