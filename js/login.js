// Get the login button and add Event Listener

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputNumber = document.getElementById('input-number').value;
    const inputPin = document.getElementById('input-login-pin').value;    

    if(inputNumber === '0' && inputPin === '0') {
        window.location.href = './home.html';
    } else {
        alert('Number or Pin is not correct')
    }
})