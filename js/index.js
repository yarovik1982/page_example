gsap.registerPlugin(SplitText, ScrollTrigger);

const split = SplitText.create(".preloader__line", {
  type: "chars",
  onSplit(self) {
    gsap.set(".preloader__line", { visibility: "visible" });

    gsap.from(self.chars, {
      delay: 1,
      duration: 2,
      y: -500,
      autoAlpha: 0,
      stagger: 0.1,
      ease: "back.out(4)",
      onComplete: () => {
        if (window.innerWidth <= 768) {
          animateMobileHeader();
        } else {
          animateHeader();
        }
      },
    });
  },
});

function animateHeader() {
  gsap.timeline()
    .to(".preloader", { duration: 1, opacity: 0 })
    .set(".preloader", { display: "none" })
    .to(".header__item", {
      opacity: 1,
      y: 0,
      stagger: {
        each: 0.1,
        from: "start"
      },
      duration: 1
    })
    .to(".header", { backgroundColor: "teal", duration: 3 })
    .to([".header__item", ".header__item a"], { color: "#ccc", duration: 3 });
  }
  
  function animateMobileHeader() {
    gsap.timeline()
    .set(".preloader", { display: "none" })
    .to(".preloader", { opacity: 0, duration: 1 })
    .set(".header__burger", { visibility: "visible", fill: "#ccc" })
    .to(".header__burger", { opacity: 1, duration: 3 })
    .to(".header", { backgroundColor: "teal", duration: 3 })
}

let tl = gsap.timeline({

	scrollTrigger: {
		trigger: '.hero',
		pin: true, 
		start: 'top top', 
  	end: '+=5000',
		scrub: 1, 
		
	}
});


tl.addLabel('start')
	.to('.hero__content .hero__column', { left:0 },">")


	.addLabel('end');