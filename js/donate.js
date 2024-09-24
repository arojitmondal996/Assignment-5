const donateBtn = document.getElementById('donate-btn');
donateBtn.addEventListener('click', function () {

    const donateInput = showInputValue('donate-input');
    const balanceDonate = showInputText('balance-donate');
    const balanceAccount = showInputBalance('account-balance');

    if (donateInput > balanceAccount) {
        return alert('not enough money for donation');
    }
    
    if (isNaN(donateInput) || donateInput <= 0) {
        return alert('invalid donation try again');
    }

    const newBalance = balanceAccount - donateInput;
    const newDonateBalance = balanceDonate + donateInput;
    document.getElementById('account-balance').innerText = newBalance.toFixed(2);
    document.getElementById('balance-donate').innerText = newDonateBalance.toFixed(2);
    document.getElementById('donate-input').value = '';

    const addHistory = document.getElementById('history-section');
    const adInput = document.getElementById('input-text').innerText;
    const dateTime = new Date();
    const createHistory = document.createElement('div');
    createHistory.className = "border border-gray-400 rounded, p-4 mb-4";
    createHistory.innerHTML = `
        <p class="text-xl font-bold">${donateInput} Taka is ${adInput} </p>
        <p>${dateTime}</p>
    `;
    addHistory.appendChild(createHistory);
})
