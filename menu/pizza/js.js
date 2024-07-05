let loadMoreBtn = document.querySelector('#load-more');
let currentItem =8;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.work .box-work .box')];
   for (var i = currentItem; i < currentItem + 17; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}
