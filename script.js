function locomotiveAnimation(){

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}

locomotiveAnimation()



function loaderAnimation(){
  function counter() {
    var counter = document.querySelector(".loader h4");
    var count = 0;
    var interval = setInterval(() => {
      if (count === 100) {
        clearInterval(interval);
  
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
    
  })
 
  
 
  
  tl.to(".loader",{
      display:"none"
  })
  tl.from(".page1",{   duration:1.2,
    y: "100vh",
    ease: "power4.out",
  },"-=1"
   
  )
  tl.from("nav",{
    opacity:0,
    delay:0.1
  })
  tl.from(" .hero-texts h1,.hero-texts h2,.hero-texts span ,.hero-contents  ",{
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
    top:dets.y,
    })
  })
  
  Shery.makeMagnet(".nav-left svg,.nav-right h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
cursorAnimation()