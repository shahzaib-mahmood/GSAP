var path = "M 10 200 Q 1500 200 2990 200";
var finalPath = "M 10 200 Q 1500 200 2990 200";


var string = document.querySelector("#string");
string.addEventListener("mousemove", function (dets) {
  path = `M 10 200 Q ${dets.x} ${dets.y} 2990 200`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.2,
        ease: "elastic.out(1,0.2)",
    })
});
