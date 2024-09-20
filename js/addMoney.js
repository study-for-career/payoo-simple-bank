// Get the Add Money Button

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const pin = document.getElementById('input-pin').value;
    const amount = document.getElementById('input-amount').value;
    const amountNumber = parseFloat(amount);
   
    // Set condition to sure pin is correct

    if(pin === '0'){
        const availableBalance = document.querySelector('#available-balance').innerText;        
        const balanceNumber = parseFloat(availableBalance); 
        const newBalance = balanceNumber + amountNumber;
        
        document.querySelector('#available-balance').innerHTML = newBalance;
    } else {
        alert ('Add Balance Failed')
    }
    
})



