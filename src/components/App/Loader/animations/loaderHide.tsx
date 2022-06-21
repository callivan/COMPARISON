import gsap from "gsap";

export async function loaderHide() {
  await gsap.to(".loader", { duration: 1, ease: "expo.out", opacity: 0 });
}
