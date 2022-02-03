const toggle = document.getElementById('toggle');
const closeButton = document.getElementById('close');
const openButton = document.getElementById('open');
const modal = document.getElementById('modal');


toggle.addEventListener('click',()=>
    document.body.classList.toggle('show-nav')
);


openButton.addEventListener('click',()=>
  modal.classList.add('show-modal')
);

closeButton.addEventListener('click',()=> 
  modal.classList.remove('show-modal')
);




