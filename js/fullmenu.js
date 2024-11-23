const burger = document.querySelector('.burger')
const overlay = document.querySelector('.overlay')
const exit = document.querySelector('.exit')

var tl = gsap.timeline()

tl.paused(true)
  
tl.to(".side1", {
  duration:0.7,
  ease: "circ.out",
    left:"-48%"
})
  
tl.to(".side2", {
  duration:0.7,
 ease: "circ.out",
    right:"-48%"
}, "-=0.7")

tl.to(".exit,.overlayLogo", {
  duration:0.3,
  opacity: 1,
  y:"0px"
},"-=0.3")
  
tl.to(".menu-container", {
  duration:0.3,
  opacity:1,
})

tl.to(".navLink", {
  duration:0.6,
  ease: "power3.out",
  opacity: 1,
  x: "0%",
  stagger:0.1

},"-=0.3")




burger.addEventListener('click', () => {
  tl.play();
})
exit.addEventListener('click', () => {
  tl.reverse(1.2);
})

document.querySelectorAll('.navLink').forEach(item => {
  item.addEventListener('click', event => {
      tl.reverse(1.2);
  })
})