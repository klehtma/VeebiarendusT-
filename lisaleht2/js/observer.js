const options = {
  root: null,
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("second-section-visible")
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const el = document.querySelector(".second-section");

observer.observe(el);

//viide: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API