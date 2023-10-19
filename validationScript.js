    // JavaScript code for form validation
	
  
      // Retrieve the input field value
	  const myForm = document.getElementById('myForm');
	  const inputField = document.getElementById('inputField');
	  const error = document.getElementById('error');
	  
	  //Add an event listener to the form submits an event.
	  // Prevent form from submitting
	  document.getElementById('myForm').addEventListener('submit', function(event) {
		  event.preventDefault();
	  

      // Regular expression pattern for alphanumeric input
	  const input = inputField.value.trim();
	  const alphanumeric = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
	  // Valid input: display confirmation and submit the form
	  // Invalid input: display error message
	  if(alphanumeric.test(input)){
		  alert('Form submitted successfully!');
		  resetForm();
	  } else{
		  alert('Input should contain only alphanumeric characters.');
		  form.appendChild(error);
	  }

	  }); 
	  

        