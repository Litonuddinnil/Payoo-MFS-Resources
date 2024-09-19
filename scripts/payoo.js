 
 document.getElementById('btn-money').addEventListener('click',function(event){
     event.preventDefault();
    const addMoney= getInputFieldValueById('input-add-number');
    const pinNumber= getInputFieldValueById('input-pin-number');
    if(pinNumber===1234){
         const currentNumber =getTextFieldValueById('current-money-number');
           const newBalance =addMoney+currentNumber;
           document.getElementById('current-money-number').innerText=newBalance; 
         //   add transaction history
         const p =document.createElement('p');
         p.innerText=`Added: ${addMoney} 
           New Balance:${newBalance}`;
         // console.log(p);
         // show same thing of cash out system
         document.getElementById('transaction-container').appendChild(p);
        }
   //   first way.
   //   const amount =document.getElementById('amount-number').value;
   //  const pinNumber =document.getElementById('pin-number').value;
   //   if(pinNumber==="1234"){
   //      const currentBalance =document.getElementById('money-number').innerText;
   //      const  amountNumber =parseFloat(amount);
   //      const  currentNumber =parseFloat(currentBalance);
   //      const newBalance =amountNumber+currentNumber;
   //      document.getElementById('money-number').innerText=newBalance; 
   //   }
   //   else{
   //      alert("wrong password");
   //   }
 });
 document.getElementById('log-out').addEventListener('click',function(){
    const btnLogOut =document.getElementById('log-out').innerText;
    if(btnLogOut==='Log Out'){
    window.location.href='/index.html';
 }
});