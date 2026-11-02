document.querySelectorAll('.luna-carousel').forEach(carousel => {
 const slides=[...carousel.querySelectorAll('.luna-slide')];
 const controls=carousel.querySelector('.luna-controls');
 const dots=[...carousel.querySelectorAll('[data-slide]')];
 let current=0;
 function show(index){
  current=(index+slides.length)%slides.length;
  slides.forEach((slide,i)=>{slide.hidden=i!==current;});
  dots.forEach((dot,i)=>{dot.setAttribute('aria-current',i===current?'true':'false');});
  carousel.querySelector('.luna-status').textContent=`Image ${current+1} of ${slides.length} · Select an image to view full size`;
 }
 controls.hidden=false;
 carousel.querySelectorAll('[data-step]').forEach(button=>button.addEventListener('click',()=>show(current+Number(button.dataset.step))));
 dots.forEach(button=>button.addEventListener('click',()=>show(Number(button.dataset.slide))));
 carousel.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();show(current+(event.key==='ArrowLeft'?-1:1));}});
 show(0);
});
