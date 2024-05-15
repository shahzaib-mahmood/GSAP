var main= document.querySelector(".main");
var cursor= document.querySelector(".cursor");
var image = document.querySelector(".image");

main.addEventListener("mousemove", (e)=>{
gsap.to (cursor, {
x: e.x,
y:e.y,
ease: "back.out(1.5)",
})
})


image.addEventListener("mouseenter", ()=>{
    cursor.innerHTML="View More"
    gsap.to(cursor, {
        scale:2,
        backgroundColor:"#ffffff8c"

    })
})

image.addEventListener("mouseleave", ()=>{
    cursor.innerHTML= "";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"

        
    })
})