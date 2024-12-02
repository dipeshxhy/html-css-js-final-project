function loaderAnimation(){
  function counter() {
    var counter = document.querySelector(".loader h4");
    var count = 0;
    var interval = setInterval(() => {
      if (count === 100) {
        clearInterval(interval);
        // counter.textContent="100%"
  
        return;
      }
      count++;
      counter.textContent = count;
    }, 30);
  }
  counter();
  
  var tl=gsap.timeline()
  tl.from(".loader-contents h1", {
      y: 170,
      stagger: 0.2,
      duration: 0.7,
    });
 
    tl.from(".loader h4,.loader h5",{
      opacity:0,
      delay:0.2
    })
  
  tl.to(".loader ",{
      opacity:0,
      duration:2,
      delay:1,
      onComplete:()=>{
          document.querySelector(".loader").style.display="none"
          document.body.style.overflow="auto"
          document.documentElement.style.overflow="auto"
      }
  })
 
  
  tl.from("main",{
      y: "40%"
  })
  tl.from(".page1",{
      duration:1.2,
      ease: "power4.out",
      y: "100%"
  })
  tl.to(".loader",{
      display:"none"
  })
  tl.from("nav",{
    opacity:0,
    delay:0.1
  })
  tl.from(" .hero-texts h1,.hero-texts h2,.hero-texts span ,.hero-contents h4",{
    opacity:0,
    y:70,
    delay:0.2,
    stagger:0.13,
  })
  
  
  
}
loaderAnimation()

//crscr animation

function cursorAnimation(){

  document.addEventListener("mousemove",function(dets){
    gsap.to(".crscr",{
      left:dets.x,
    top:dets.y
    })
  })
  
  Shery.makeMagnet(".nav-left svg,.nav-right h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
cursorAnimation()