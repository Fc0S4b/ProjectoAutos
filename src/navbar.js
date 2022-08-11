let currentPosition = window.scrollY;
window.addEventListener('scroll', function () {
  let currentScroll = window.scrollY;
  const FixedNav = document.querySelector('.fixed-nav');
  if (currentPosition >= currentScroll) {
    FixedNav.style.top = '0';
  } else {
    FixedNav.style.top = '-100px';
  }
  currentPosition = currentScroll;
});
