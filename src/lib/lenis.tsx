import Lenis from "@studio-freight/lenis";

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,   
    lerp: 0.1,      
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
