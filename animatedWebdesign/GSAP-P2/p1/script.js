
// part 1----------------
// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: .5,
//     duration: 2,
//     rotate: 360
// })
// gsap.from("#page2 #box", {
//     scale: 0,
//     delay: .5,
//     duration: 2,
//     rotate: 360,
//     backgroundColor: "#78bf07ff",
//     borderRadius: "100%",
//     scale: 0.3,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         // end: "bottom 50%",
//         // scrub: 1
//     }
// })
// gsap.from("#page3 #box", {
//     scale: 0,
//     delay: .5,
//     duration: 2,
//     rotate: 360
// })


// part 2 -----------------


// gsap.from("#page2 h1", {
//     opacity: 0,
//     x: 500,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         scrub: 1
//     }
// })
// gsap.from("#page2 h2", {
//     opacity: 0,
//     x: -500,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         scrub: 1
//     }
// })



// part 3
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});



gsap.from("#page2 #box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "bottom 90%",
        scrub: 2,
        pin: true
    }
})