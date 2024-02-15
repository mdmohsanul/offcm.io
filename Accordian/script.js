const acordianBody = document.querySelector('.accordian-body');

const open = document.querySelectorAll('.btn-open');
console.log(acordianBody.length)
 open.addEventListener('click',function(){
   
    acordianBody.classList.remove('hidden')
 })

 for(let i=0; i< acordianBody.lenght; i++){
    open[i].addEventListener('click',function(){
   
        acordianBody.classList.remove('hidden')
     })
 }