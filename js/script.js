// Add a simple JavaScript function
function showMessage() {
    alert('Hello, this is my first website!');
}

// Attach the function to a button click event
const button = document.querySelector('button');
button.addEventListener('click', showMessage);