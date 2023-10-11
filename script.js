document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX; 
    const mouseY = e.clientY; 

    gsap.to(".circle", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
    }); 

    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
    })
})
