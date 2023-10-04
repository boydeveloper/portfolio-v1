const sections = document.querySelectorAll(".Project");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
      } else {
        entry.target.classList.remove("scroll-animation");
      }
    });
  },
  {
    threshold: 0.8,
  }
);

for (let i = 0; i < sections.length; i++) {
  observer.observe(sections[i]);
}
