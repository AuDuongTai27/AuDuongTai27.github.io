AOS.init({
  duration: 1000,
  once: true
});

// Hero animation
gsap.from(".hero-text", {
  y: 80,
  opacity: 0,
  duration: 1.2
});

gsap.from(".hero-sub", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.4
});
