 
 document.getElementById('btn-money').addEventListener('click',function(event){
     event.preventDefault();
     const amount =document.getElementById('amount-number').value;
    const pinNumber =document.getElementById('pin-number').value;
     if(pinNumber==="1234"){
        const currentBalance =document.getElementById('money-number').innerText;
        const  amountNumber =parseFloat(amount);
        const  currentNumber =parseFloat(currentBalance);
        const newBalance =amountNumber+currentNumber;
        document.getElementById('money-number').innerText=newBalance; 
     }
     else{
        alert("wrong password");
     }
 });
 document.getElementById('log-out').addEventListener('click',function(){
    const btnLogOut =document.getElementById('log-out').innerText;
    if(btnLogOut==='Log Out'){
    window.location.href='/Payoo-MFS-Resources/index.html';
 }
});