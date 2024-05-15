// gsap.to(".box" ,{
//     x:1200,
//     y:150,
//    //  opacity:0,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     rotate:360,
//     // skewY:10
//     // skewY:10
//     scale:1.5,
//    //  repeat:-1,//repeat the iteration
//    //  yoyo:true//go and back   
// })


// gsap.from(".box2", {
//     x:900,
//     y:900,
//     duration:1.5,
//     delay:1,
// })

// gsap.from("h1" ,{
//     // color: "red",
//     opacity:0,
//     duration:1,
//     x:-20,
//     delay:1,
//     stagger:0.3

// })

// timeline
var tl= gsap.timeline()
tl.to(".box", {
   x:1200,
   y:150,
   // opacity:0,
   duration:1,
   delay:1,
   backgroundColor:"blue",
   borderRadius:"50%",
   rotate:360,
   scale:1.5,
})
tl.from("h2",{
    y:-20,
    duration:1,
    opacity:0,
    delay:0.5,

})
 tl.from("h4",{
    y:-20,
    duration:1,
    opacity:0,
    delay:0.5,
    stagger:0.3,
 })
 tl.from("h1",{
    y:20,
    opacity:0,
    // rotate:360,
    duration:0.5,
    scale:0.3,
    
   
 })