(function () {
  var id = document.body.getAttribute('data-page');
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Highlight the current page in the menu */
  [].forEach.call(document.querySelectorAll('[data-link]'), function (a) {
    if (a.getAttribute('data-link') === id) { a.setAttribute('aria-current', 'page') }
  });

  /* Mobile menu */
  var mb = document.querySelector('.menu'), nv = document.getElementById('nav');
  mb.addEventListener('click', function () { var o = nv.classList.toggle('open'); mb.setAttribute('aria-expanded', String(o)) });

  /* Fade-in on scroll */
  var io = ('IntersectionObserver' in window && !rm) ? new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target) } }) }, { threshold: .12 }) : null;
  if (io) {
    [].slice.call(document.querySelectorAll('.row,.gal figure,.logos .ph,.quote,.txt p,.det,.stats li,section h2')).forEach(function (el) {
      el.classList.add('rv'); el.style.transitionDelay = ([].indexOf.call(el.parentNode.children, el) % 5) * 70 + 'ms'; io.observe(el);
    })
  }

  /* Signature hover: the red "cell" grows from where the cursor enters */
  [].forEach.call(document.querySelectorAll('.row,.ph,.btn'), function (el) { el.classList.add('hv') });
  document.addEventListener('pointerover', function (e) { var t = e.target.closest && e.target.closest('.hv'); if (t && !t.contains(e.relatedTarget)) { var r = t.getBoundingClientRect(); t.style.setProperty('--x', (e.clientX - r.left) + 'px'); t.style.setProperty('--y', (e.clientY - r.top) + 'px') } });

  /* Scroll progress bar */
  var bar = document.querySelector('.bar');
  window.addEventListener('scroll', function () { var h = document.documentElement.scrollHeight - window.innerHeight; bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ')' }, { passive: true });

  /* Hero circles follow the mouse slightly (Home page only) */
  var hero = document.querySelector('.hero'), orb = document.querySelector('.orb');
  if (hero && orb && !rm) { hero.addEventListener('pointermove', function (e) { var r = hero.getBoundingClientRect(); orb.style.setProperty('--px', ((e.clientX - r.left) / r.width - .5) * -36 + 'px'); orb.style.setProperty('--py', ((e.clientY - r.top) / r.height - .5) * -24 + 'px') }) }
})();
