// Get Add Money change button

// Toggle between two buttons

document.getElementById('add-money-btn-change').addEventListener('click', function(){
    const addMoneySection = document.getElementById('add-money-section');
    const cashoutSection = document.getElementById('cashout-section');

    addMoneySection.classList.remove('hidden');
    cashoutSection.classList.add('hidden');
})

document.getElementById('cahout-btn-change').addEventListener('click', function(){
    const addMoneySection = document.getElementById('add-money-section');
    const cashoutSection = document.getElementById('cashout-section');

    cashoutSection.classList.remove('hidden');
    addMoneySection.classList.add('hidden');
})
