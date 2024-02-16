// Retrieve username from local storage
var storedUsername = localStorage.getItem('loggedInUsername');

const loggedInName = document.getElementById('loggedInName');

// Display the username in the HTML
loggedInName.innerHTML = storedUsername;