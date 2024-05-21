const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('vis')
    } else {
      entry.target.classList.remove('vis');
    }
  });
});


const hiddenElements = document.querySelectorAll('.gemte');
hiddenElements.forEach((el) => observer.observe(el));

