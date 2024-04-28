var temp;
window.addEventListener("mousemove", (Data) => {
    temp = Data.clientY;
    gsap.to(".mini-circle", {
        y: Data.pageY,
        x: Data.pageX,
        translate: '-50% -130%',
        rotate: `${(Data.pageY + Data.pageX)/5}deg`
    });
});