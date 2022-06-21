import gsap from "gsap";

export function headerShow() {
  gsap.to(".header", { duration: 1, ease: "expo.out", scaleY: 1 });
  gsap.to([".header__title", ".header__chapter", ".header__account-text", ".header__account-icon"], {
    delay: .8,
    duration: 1,
    stagger: 0.15,
    ease: "expo.out",
    opacity: 1,
    x: 0,
  });
}
