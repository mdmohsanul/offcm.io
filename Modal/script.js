const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');


const showModal =   document.querySelectorAll('.show-modal')

console.log(overlay.classList);

for(let i=0 ; i<showModal.length; i++){
   showModal[i].addEventListener('click',function(){
       modal.classList.remove('hidden');
      overlay.classList.remove('hidden')
   }) 
}

btnClose.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
})

overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
})