gsap.from("h1", {
    // color: "red",
    opacity: 0,
    duration: 1,
    y: 20,
    delay: 1,
    stagger: 0.3
})


gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "#78bf07ff",
    borderRadius: "100%",
    scale: 0.3,
    repeat: -1,
    yoyo: 1
})