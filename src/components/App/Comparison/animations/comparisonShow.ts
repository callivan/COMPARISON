import gsap from "gsap";

export function comparisonShow() {
  gsap.to([".comparison__title", ".comparison__count"], {
    delay: 0.8,
    duration: 1,
    stagger: 0.1,
    ease: "expo.out",
    opacity: 1,
    x: 0,
  });
}
