const backToCreateAccount = document.getElementById('backToCreateAccount')
const signInAccountContainer = document.getElementById('signInAccountContainer')
const signInAccountContainer2 = document.getElementById('signInAccountContainer2')
const signInAccountContainer3 = document.getElementById('signInAccountContainer3')

const signUpAccountContainer = document.getElementById('signUpAccountContainer')
const signUpAccountContainer2 = document.getElementById('signUpAccountContainer2')
const signUpAccountContainer3 = document.getElementById('signUpAccountContainer3')
const alreadyHaveAnAcc = document.getElementById('alreadyHaveAnAcc')
const backToSignIn = document.getElementById('backToSignIn')

backToCreateAccount.addEventListener('click', function(){
    signInAccountContainer.style.opacity = 0
    signInAccountContainer2.style.opacity = 0
    signInAccountContainer3.style.opacity = 0
    backToCreateAccount.style.opacity = 0

    setTimeout(function(){
        signInAccountContainer.style.display = 'none'
        signInAccountContainer2.style.display = 'none'
        signInAccountContainer3.style.display = 'none'
        backToCreateAccount.style.display = 'none'

        signUpAccountContainer.style.display = 'block'
        signUpAccountContainer2.style.display = 'block'
        signUpAccountContainer3.style.display = 'block'
        alreadyHaveAnAcc.style.display = 'block'
        backToSignIn.style.display = 'block'
    }, 500)

    setTimeout(function(){
        signUpAccountContainer.style.opacity = 1
        signUpAccountContainer2.style.opacity = 1
        signUpAccountContainer3.style.opacity = 1
        alreadyHaveAnAcc.style.opacity = 1
        backToSignIn.style.opacity = 1
    }, 600)
})

backToSignIn.addEventListener('click', function(){
    signUpAccountContainer.style.opacity = 0
    signUpAccountContainer2.style.opacity = 0
    signUpAccountContainer3.style.opacity = 0
    alreadyHaveAnAcc.style.opacity = 0
    backToSignIn.style.opacity = 0

    setTimeout(function(){
        signUpAccountContainer.style.display = 'none'
        signUpAccountContainer2.style.display = 'none'
        signUpAccountContainer3.style.display = 'none'
        alreadyHaveAnAcc.style.display = 'none'
        backToSignIn.style.display = 'none'

        signInAccountContainer.style.display = 'block'
        signInAccountContainer2.style.display = 'block'
        signInAccountContainer3.style.display = 'block'
        backToCreateAccount.style.display = 'block'
    }, 500)

    setTimeout(function(){
        signInAccountContainer.style.opacity = 1
        signInAccountContainer2.style.opacity = 1
        signInAccountContainer3.style.opacity = 1
        backToCreateAccount.style.opacity = 1
    }, 600)
})