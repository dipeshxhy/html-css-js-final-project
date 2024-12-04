var videoContainer = document.querySelector(".video-container");
var video = document.querySelector(".video-container video");
var underline=document.querySelector(".underline")


function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function loaderAnimation() {
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
    }, 34);
  }
  counter();

  var tl = gsap.timeline();
  tl.from(".loader-contents h1", {
    y: 180,
    stagger: 0.2,
    duration: 0.7,
  });

  tl.from(".loader h4,.loader h5", {
    opacity: 0,
    delay: 0.1,
  });

  tl.to(".loader ", {
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  tl.to(".loader", {
    display: "none",
  });
  tl.from(".page1", { duration: 1.2, y: "100vh", ease: "power4.out" }, "-=1");
  tl.from("nav", {
    opacity: 0,
    delay: 0.1,
  });
  tl.from(".page2", {
    opacity: 0,
    x:300,
  });
  tl.from(" .hero-texts h1,.hero-texts h2,.hero-texts span ,.hero-contents  ", {
    opacity: 0,
    y: 71,
    delay: 0.1,
    stagger: 0.13,
  });

}
function cursorAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".nav-left svg,.nav-right h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(".mousefollower", {
        opacity: 0,
      });
      gsap.to(".video-play", {
        x: dets.x - 900,
        y: dets.y - 100,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1,
    });
    gsap.to(".video-play", {
      x: 0,
      y: 0,
    });
  });
  var flag = 0;
  video.addEventListener("click", function () {
    if (flag == 0) {
      video.play();
      video.style.opacity = 1;
      document.querySelector(
        ".video-play"
      ).innerHTML = `<i class="ri-pause-large-fill"></i>`;
      gsap.to(".video-play", {
        scale: 0.5,
      });
      flag = 1;
    } else {
      video.pause();

      video.style.opacity = 0;
      document.querySelector(
        ".video-play"
      ).innerHTML = `<i class="ri-play-large-fill"></i>`;
      gsap.to(".video-play", {
        scale: 1,
      });
      flag = 0;
    }
  });
}
function flagAnimation() {
document.addEventListener("mousemove",function(dets){
  gsap.to(".img-flag",{
    x:dets.x-200,
    y:dets.y-230
  })
})
  document
    .querySelector("#hover-texts")
    .addEventListener("mousemove", function () {
      gsap.to(".img-flag", {
        opacity: 1,
      });
    });
  document
    .querySelector("#hover-texts")
    .addEventListener("mouseleave", function () {
      gsap.to(".img-flag", {
        opacity: 0,
      });
    });
}

function sheryAnimation() {
  Shery.imageEffect(".center-part", {
    style: 6,
    config:{"noiseDetail":{"value":2.29,"range":[0,100]},"distortionAmount":{"value":4.73,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":"-99969","range":[-9999999,9999999]},"aspect":{"value":0.9643697415308539},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.76,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":2.14,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    gooey: true,
  });
}
var footerH1=document.querySelector(".footer-top h1")
function footerAnimation(){
  footerH1.addEventListener("mouseenter", () => {
    footerH1.style.fontStyle="italic "
    footerH1.style.fontSize="8vw"
    
      // Trigger Textillate.js fade-out animation
      $('.footer-top h1').textillate({
        in: { effect: 'fadeIn', delayScale: 1.5,delay:50}, // Fade out with shuffle
        autoStart: true, // Auto start the animation
    
        
      });
    
      // Start fade-out animation
      $('.footer-top h1').textillate('in');
    });
    document.querySelector(".footer-top h1").addEventListener("mouseleave", () => {
      footerH1.style.fontStyle="normal"
      
      $('.footer-top h1').textillate({
      in: { effect: 'fadedIn', delayScale: 1.2,delay:50}, // Fade out with shuffle
      autoStart: true, // Auto start t }, // Fade out with shuffle
    
       
      });
    
      // Start fade-out animation
      $('.footer-top h1').textillate('in');
    });
    
}



footerAnimation()


locomotiveAnimation();

loaderAnimation();

cursorAnimation();

flagAnimation();

sheryAnimation();
