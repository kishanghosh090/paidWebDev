// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
// })
// gsap.to("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
// })
// gsap.to("#box3", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
// })



// timeline

const tl = gsap.timeline()

// tl.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     scale: 0.4
// })
// tl.to("#box2", {
//     x: 1000,
//     duration: 2,
//     // delay: 1,
//     rotate: 360,
//     scale: 0.4
// })
// tl.to("#box3", {
//     x: 1000,
//     duration: 2,
//     // delay: 1,
//     rotate: 360,
//     scale: 0.4
// })


tl.from("h2", {
    y: -20,
    opacity: 0,
    duration: 1,
    dely: 0.5
})
tl.from("h4", {
    y: -30,
    opacity: 0,
    duration: 1,
    dely: 0.5,
    stagger: 0.3,
    // yoyo: 1
})