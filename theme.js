const themeMap = {
  dark: "light",
  light: "dark",
  // solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

// document.getElementById('themeButton').onclick = toggleTheme;






let sections = gsap.utils.toArray(".panel");

console.log("hello world: " + sections)
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});


// gsap.from("#page_one_title", {
// });

gsap.fromTo("#page_one_title", 2, { x:"50vw", y:"100vh", }, { x: "50vw", y: "20vh", ease: "power4.out" })
gsap.fromTo("#page_two_title", 2, { x:"50vw", y:"100vh", }, { x: "50vw", y: "20vh", ease: "power4.out"})
gsap.fromTo("#page_three_title", 2, { x:"50vw", y:"100vh", }, { x: "50vw", y: "20vh", ease: "power4.out"})
// gsap.fromTo("#page_four_cat", 2, { x:"50vw", y:"100vh", }, { x: "50vw", y: "20vh", ease: "power4.out"})
gsap.to("#page_four_cat", 2, { x: "50vw", y: "20vh", ease: "power4.out"})
