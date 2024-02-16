document.addEventListener('DOMContentLoaded', function (){
    //localStorage.clear()
})

const signIn = document.getElementById('signIn')
const createAccount = document.getElementById('createAccount')

/*----*/

function addUser(username, password){
    const savedUserData = JSON.parse(localStorage.getItem('userSignupData')) || []; 

    //see if username already exists
    if (savedUserData.some(user => user.username === username)){
        alert('Username already exists. Please enter a new username.')
        return
    }

    // Add the new user
    savedUserData.push({ username, password });

    // Save the updated user data back to LocalStorage
    localStorage.setItem('userSignupData', JSON.stringify(savedUserData));
}

function clearInputFields() {
    createUsername.value = ''
    createPassword.value = ''
    enterUsername.value = ''
    enterPassword.value = ''
}

createAccount.addEventListener('click', function(){
    const createUsername = document.getElementById('createUsername').value
    const createPassword = document.getElementById('createPassword').value

    if (createUsername && createPassword){
        addUser(createUsername, createPassword);
        alert('Signed up successfully. Click "OK" to continue to login.');
        clearInputFields();
        window.location.href = 'signUpLogin.html'
    }
    else {
        alert('Please fill in all fields.');
    }
})

signIn.addEventListener('click', function(){
    const enterUsername = document.getElementById('enterUsername').value
    const enterPassword = document.getElementById('enterPassword').value

    // Retrieve user data from LocalStorage
    const savedUserData = JSON.parse(localStorage.getItem('userSignupData')) || [];

    const user = savedUserData.find((user) => user.username === enterUsername && user.password === enterPassword);

    if(user){
        localStorage.setItem('loggedInUsername', enterUsername);
        window.location.href = 'home.html';
        clearInputFields();
    }
    else{
        alert('Incorrect username or password.');
        clearInputFields();
    }
})