   // first WebAssembly.
   //  document.getElementById('btn-money-cashOut').addEventListener('click',function(event){
   //      event.preventDefault();
   //      const amountCashOut =document.getElementById('amount-number-cashOut').value;
   //     const pinNumber =document.getElementById('pin-number-cashOut').value;
   //      if(pinNumber==="1234"){
   //         const currentBalance =document.getElementById('money-number').innerText;
   //         const  amountNumber =parseFloat(amountCashOut);
   //         const  currentNumber =parseFloat(currentBalance);
   //         const newBalance =currentNumber-amountNumber;
   //         document.getElementById('money-number').innerText=newBalance; 
   //      }
   //      else{
   //         alert("wrong password");
   //      }
   //  });
    document.getElementById('btn-money-cashOut').addEventListener('click',function(event){
        event.preventDefault();
        const cashOutMoney= getInputFieldValueById('amount-number-cashOut');
        const pinNumber= getInputFieldValueById('pin-number-cashOut');
        if(isNaN(cashOutMoney)){
         alert('Failed to add money.');
         return;
       }
        if(pinNumber===1234){
           const currentNumber= getTextFieldValueById('current-money-number');
           if(cashOutMoney>currentNumber){
            alert('You do no have enough money your account');
           }
           const newBalance =currentNumber-cashOutMoney;
           document.getElementById('current-money-number').innerText=newBalance; 
         // push up to transaction file
           const p =document.createElement('p');
           p.classList.add('bg-yellow-300');
           p.innerHTML=`
           <h4 class="text-2xl font-bold"> Cash Out</h4>
           <p>${cashOutMoney} withdraw. New Balance ${newBalance}</p>
           `
           document.getElementById('transaction-container').appendChild(p);
         //   const p =document.createElement('p');
         //  p.innerText=`Cash Out: ${cashOutMoney} 
         //   New Balance:${newBalance}`;
         // console.log(p);
         // show same thing of cash out system
         // document.getElementById('transaction-container').appendChild(p);
        }
        else{
           alert("wrong password");
        }
    });

 