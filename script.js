
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


