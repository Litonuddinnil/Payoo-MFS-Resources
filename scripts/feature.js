// document.getElementById('btn-show-cashOut').addEventListener('click',function(){
//     document.getElementById('cash-out-from').classList.remove('hidden');
//    document.getElementById('add-money-from').classList.add('hidden');

// })
// document.getElementById('btn-add-money').addEventListener('click',function(){
//     document.getElementById('cash-out-from').classList.add('hidden');
//     document.getElementById('add-money-from').classList.remove('hidden');
// })
document.getElementById('btn-show-cashOut').addEventListener('click',function(){
  showSactionById('cash-out-from');

})
document.getElementById('btn-add-money').addEventListener('click',function(){
    showSactionById('add-money-from');
})
document.getElementById('btn-show-transeation').addEventListener('click',function(){
    showSactionById('transaction-section');
})