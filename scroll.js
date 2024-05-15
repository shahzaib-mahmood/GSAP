// gsap.from(".page1 .box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360,

// })

// gsap.from(".page2 h1",{
//     scale:0,
//     delay:1,
//     duration:1,
//     // rotate:360,
//     // scrollTrigger: ".page2 .box"
//     scrollTrigger: {
//         trigger: ".page2 h1",
//         scroller: "body",
//         markers:true,
//         start:"top 60%"
//     }

// })

// gsap.from(".page2 h1",{
// opacity:0,
// duration:1.5,
// x:500,
// scrollTrigger: {
//     trigger: ".page2 h1",
//     scroller:"body",
//     markers:true,
//     start:"top 50%",
// }

// })
// gsap.from(".page2 h2",{
// opacity:0,
// duration:1.5,
// x:-500,
// scrollTrigger: {
//     trigger: ".page2 h2",
//     scroller:"body",
//     markers:true,
//     start:"top 40%",
// }

// })


// gsap.from(".page2 .box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:720,
//     scrollTrigger:{
//         trigger: ".page2 .box",
//         scroller:"body",
//         markers: true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2,
//         pin: true,

//     }
// })

gsap.to(".page2 h1",{
    transform:"translateX(-90%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
        
    }
})