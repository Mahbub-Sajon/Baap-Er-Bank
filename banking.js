document.getElementById('deposit-button').addEventListener('click', function(){
     const depositInput = document.getElementById('deposit-input');
     const newDepositAmount = depositInput.value;
    //  console.log(depositAmount);
     const depositTotal = document.getElementById('deposit-total');
     const previousDepositAmount = depositTotal.innerText;
     const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
     depositTotal.innerText = newDepositTotal;

    //  input field sara onno jaiga notun lekha jukto korte hole innerText diye nite hoi. ekhane deposit total ase h4 tag er moddhe tai ekhane new kisu add korte hole innerText use korte hobe;
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount) ;

    balanceTotal.innerText = newBalanceTotal;
    depositInput.value = '';
});
// handle withdraw wvwnt handler
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
   const newWithdrawAmount = parseFloat(withdrawAmountText);
   const withdrawTotal = document.getElementById('withdraw-total');
   const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount; 
    withdrawTotal.innerText = newWithdrawTotal; 
    
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    withdrawInput.value = '';

})

