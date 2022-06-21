import gsap from "gsap";

export function tableShow() {
  gsap.to(".specs-table", {
    delay: 1,
    duration: 1,
    ease: "expo.out",
    opacity: 1,
  });
}
