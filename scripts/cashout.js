
    document.getElementById('btn-money-cashOut').addEventListener('click',function(event){
        event.preventDefault();
        const amountCashOut =document.getElementById('amount-number-cashOut').value;
       const pinNumber =document.getElementById('pin-number-cashOut').value;
        if(pinNumber==="1234"){
           const currentBalance =document.getElementById('money-number').innerText;
           const  amountNumber =parseFloat(amountCashOut);
           const  currentNumber =parseFloat(currentBalance);
           const newBalance =currentNumber-amountNumber;
           document.getElementById('money-number').innerText=newBalance; 
        }
        else{
           alert("wrong password");
        }
    });

 