var cusr = document.querySelector("#cursor");
var cusrBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    cusr.style.left = dets.x+"px"
    cusr.style.top = dets.y+"px"
    cusrBlur.style.left = dets.x- 170 +"px"
    cusrBlur.style.top = dets.y- 170 +"px"
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -20%",
        end:"top -80%",
        scrub:2
    }
})