var menu= document.querySelector("#nav i")
var close= document.querySelector(".full i")

var tl = gsap.timeline();
var tl2 =gsap.timeline();

tl2.from("h2",{
    y:-120,
    duration:0.8,
    opacity:0,
});

tl2.from("#nav i",{
    y:-120,
    duration:0.7,
    opacity:0,
});

tl2.from(".main h1",{
    y:20,
    duration:0.7,
    scale:0.3,
    opacity:0,
    color:"white"
})
tl2.from(".arrow i",{
    y:20,
    duration:0.7,
    scale:0.3,
    opacity:0,
    color:"white"
})

tl.to(".full", {
  right: 0,
});

tl.from("ul li", {
  x: 150,
  duration: 0.3,
  stagger: 0.2,
  opacity: 0,
});

tl.from(".full i", {
  x: 150,
  duration: 0.5,
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", ()=>{
    tl.play();
})
close.addEventListener("click", ()=>{
    tl.reverse();
    // console.log("neknkln")
})
