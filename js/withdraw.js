document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawField.value;
    console.log(withdrawAmount);

    const updatedWithdraw = document.getElementById('update-withdraw');
    updatedWithdraw.innerText = parseFloat(updatedWithdraw.innerText) + parseFloat(withdrawAmount);

    const totalBalance = document.getElementById('update-balance');
    const newBalance = parseFloat(totalBalance.innerText) - parseFloat(withdrawAmount);
    totalBalance.innerText = newBalance;

    withdrawField.value = ''; 
})