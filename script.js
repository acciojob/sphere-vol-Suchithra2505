function volume_sphere() {
    //Write your code here
  event.preventDefault(); // Prevents the form from submitting and reloading the page

  // Retrieve the radius value from the input field
  const radiusInput = document.getElementById('radius');
  const radiusValue = parseFloat(radiusInput.value);
	// Check if the entered value is a valid number
  if (!isNaN(radiusValue) && radiusValue >= 0) {
    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radiusValue, 3);

    // Display the calculated volume in the volume field
    const volumeInput = document.getElementById('volume');
    volumeInput.value = volume.toFixed(4);
  } else {
    // If the entered value is not a valid number, display an error message
    const volumeInput = document.getElementById('volume');
    volumeInput.value = 'NaN'; // Set the value to empty if the input is invalid
	  //alert('Please enter a valid positive number for the radius.');
  }
}
//} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
