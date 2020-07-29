// //for sticky nav-bar
var nav=document.querySelector(".flex-container");
var navTop=nav.offsetTop;
window.addEventListener("scroll",function(){
  if(window.scrollY >= navTop){
    document.body.classList.add("scroll");

  }
  else{
      document.body.classList.remove("scroll");

  }
})


//for navbar
var toggle=document.getElementById("nav-toggle");
var navMenu=document.getElementById("list");
toggle.onclick=function(){
   if(navMenu.offsetParent === null){
     navMenu.style.display="block" ;
     }
     else{
   navMenu.style.display ="none";
     }
}


$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
