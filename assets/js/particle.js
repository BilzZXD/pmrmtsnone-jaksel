document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    elements.forEach(function(el) {
      if (isInViewport(el) && !el.classList.contains('animated')) {
        el.classList.add('animated');
      } else if (!isInViewport(el) && el.classList.contains('animated')) {
        el.classList.remove('animated');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
});

