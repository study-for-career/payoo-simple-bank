// Get the cashout btn and add listener to it

document.getElementById('cashout-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const cashoutAmount = document.getElementById('input-cashout-amount').value;
    const pin = document.getElementById('input-cashout-pin').value;
    const amountNumCash = parseFloat(cashoutAmount);

// Set condition to sure pin is correct
    if(pin === '0'){
        const availableBalance = document.querySelector('#available-balance').innerText;        
        const balanceNumber = parseFloat(availableBalance); 
        const newBalance = balanceNumber - amountNumCash;
        
        document.querySelector('#available-balance').innerHTML = newBalance;
    } else {
        alert ('Add Balance Failed')
    }
})