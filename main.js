window.addEventListener('scroll',()=>{
  const nav=document.getElementById('navbar');
  if(nav) nav.style.boxShadow=window.scrollY>30?'0 4px 30px rgba(0,0,0,0.6)':'none';
});
function toggleMenu(){
  const links=document.querySelector('.nav-links');
  if(links) links.classList.toggle('open');
}
function toggleCard(el){
  el.classList.toggle('open');
}
function handleSubmit(e){
  e.preventDefault();
  document.querySelector('.contact-form').style.display='none';
  document.getElementById('form-success').style.display='block';
}
