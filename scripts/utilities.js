function getInputFieldValueById(id){
    const  inputValue=document.getElementById(id).value;
    const inputNumber =parseFloat(inputValue);
    return inputNumber;
}
function getTextFieldValueById(id){
    const textValue =document.getElementById(id).innerText;
    const textNumber =parseFloat(textValue);
    return textNumber;
}
function showSactionById(id){
    document.getElementById('add-money-from').classList.add('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    const notHiddenId =document.getElementById(id).classList.remove('hidden');
    return notHiddenId;
}