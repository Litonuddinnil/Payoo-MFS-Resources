 
//  search:from submit reloading a page
// step 1===set event handler
 document.getElementById('btn-login').addEventListener('click',function(event){
    // step 2 ==== prevent default behavior(prevent reloading browser)
    event.preventDefault();//vejal to beginners
   
    // step 3 === get the phone number
    const phoneNumber =document.getElementById('phone-number').value;
    // console.log(phoneNumber);
    const pinNumber =document.getElementById('pin-number').value;
    // console.log(pinNumber);
    // step 4 === validate phone number and pin
    // this is temporary.yo should don't like this.
    if(phoneNumber==='01309623416' && pinNumber==='1234'){
        console.log("you login successfully.");
        window.location.href ='/Payoo-MFS-Resources/payoo.html'; ///Payoo-MFS-Resources--->github problem fixed this is a url the payoo-repojotory
        // step 5 == alow user to use the website
    }
    else{
        alert("your pin number and phone number is a wrong.");
    }
 })