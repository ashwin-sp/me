// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from('.hero-title', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power4.out'
});

// Work items animations
gsap.utils.toArray('.work-item').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'top center',
            scrub: 1
        },
        y: 100,
        opacity: 0
    });
});

// Animate case studies on scroll
document.querySelectorAll('.case-study').forEach((study, index) => {
    gsap.from(study, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
            trigger: study,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
        }
    });
});

// Animate diagrams with a slight delay
document.querySelectorAll('.case-study-diagram').forEach((diagram) => {
    gsap.from(diagram, {
        opacity: 0,
        x: -30,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
            trigger: diagram,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
        }
    });
});