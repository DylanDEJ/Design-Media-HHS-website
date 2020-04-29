// Grab all the scroll class anchor elements, use whatever class you like
const scrollElems = document.querySelectorAll('.scroll');
// Now add an event listeners to those element
for(let i = 0; i < scrollElems.length; i++){
    const elem = scrollElems[i];
    
      elem.addEventListener('click',function(e) {
       e.preventDefault();
       
       // 1. Get the element id to which you want to scroll
       const scrollElemId = e.target.href.split('#')[1];
       
       // 2. find that node from the document
       const scrollEndElem = document.getElementById(scrollElemId);
       
       // 3. and well animate to that node.. 
       const anim = requestAnimationFrame((timestamp) => {
         const stamp = timestamp || new Date().getTime();
         const duration = 1200;
         const start = stamp;
      
         const startScrollOffset = window.pageYOffset;
         const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top - 100;
      
         scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
       })
     })
   }
  

   const easeInCubic = function (t) { return t*t*t }
 
const scrollToElem = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
   const runtime = currentTime - startTime;
   let progress = runtime / duration;
   
   progress = Math.min(progress, 1);
   
   const ease = easeInCubic(progress);
   
   window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
if(runtime < duration){
     requestAnimationFrame((timestamp) => {
       const currentTime = timestamp || new Date().getTime();
       scrollToElem(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
     })
   }
 }

 var shiftWindow = function() { scrollBy(0, -50) };
 window.addEventListener("hashchange", shiftWindow);
 function load() { if (window.location.hash) shiftWindow(); }

 var logoSite = document.querySelector('.logo-site');

 logoSite.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
 });

//  var werkVak = document.getElementById("werk");
//  var overmijVak = document.getElementById("over-mij");
//  var contactVak = document.getElementById("contact");
//  var navItem = document.querySelectorAll(".nav-item");

// var isInViewport = function (elem) {
//   var bounding = elem.getBoundingClientRect();
//   return (
//       bounding.top >= 0 &&
//       bounding.left >= 0 &&
//       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// window.addEventListener("scroll", function(){
//   if (isInViewport(werkVak)) {
//     navItem[0].classList.add("active")
// }
// else{
//   navItem[0].classList.remove("active")
// }
// })
