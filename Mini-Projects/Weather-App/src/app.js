// GSAP Animation function
function customAnimate() {
  const tl = gsap.timeline();
  tl.from("body", {
    y: -300,
    duration: 0.5,
    opacity: 0.5,
  })
  tl.from("#bg-blur", {
    y: -980,
    duration: 0.7,
    opacity: 0.5,
    stagger: .7,
  })
  tl.from("#bg-img", {
    y: -980,
    duration: 0.7,
    opacity: 0.5,
    stagger: .7,
  })
  tl.from("header,#search-card, #current-weather-card", {
    y: -300,
    scale: 0,
    duration: 0.7,
    opacity: 0,
    stagger: 0.5,
   
  });
}
customAnimate();
