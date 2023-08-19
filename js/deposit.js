document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-amount');
    const depositAmount = depositField.value;
    console.log(depositAmount);

    const updatedDeposit = document.getElementById('update-deposit');
    updatedDeposit.innerText = parseFloat(updatedDeposit.innerText) + parseFloat(depositAmount);

    const totalBalance = document.getElementById('update-balance');
    const newBalance = parseFloat(totalBalance.innerText) + parseFloat(depositAmount);
    totalBalance.innerText = newBalance;

    depositField.value = ''; 
})