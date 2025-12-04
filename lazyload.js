document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img.lazy");

  const config = {
    root: null,
    rootMargin: "0px 0px 200px 0px",
    threshold: 0
  };

  let observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let img = entry.target;
        img.src = img.dataset.src;

        img.onload = () => {
          img.classList.add("loaded");
        };

        self.unobserve(img);
      }
    });
  }, config);

  images.forEach(img => observer.observe(img));
});
