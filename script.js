$(document).ready(function () {
   $('.navbar-toggle').click(function () {
      $(this).toggleClass('toggle')
   })
   $('.navbar-toggle').click(function () {
      $('.navmenu').toggleClass('active')
   })
});

var cursor = document. getElementById("cursor");
document. onmousemove = function (e) {
cursor.style.left = (e.pageX - 25) + "px";
cursor.style.top = (e.pageY - 25) + "px";
cursor.style.display = "block"; }

document.addEventListener('mousemove', function(e) {
   
    const trail = document.createElement('div');
    trail.classList.add('trail-element');
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    setTimeout(function() {
        trail.style.opacity = '0';
        setTimeout(function() {
            trail.remove();
        }, 500); // Must match the CSS transition time
    }, 50); // Controls how often a new segment is created (shorter = smoother trail)
});

// To create a more continuous line, you might use a smaller interval (5-10ms)
// or use the 'requestAnimationFrame' method for smoother, performance-optimized animation.
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelector(".hero-section").style.transform =
    `translateY(${scrollY * 0.2}px)`;

  document.querySelector(".hero-section").style.transform =
    `translateY(${scrollY * 0.4}px)`;

  document.querySelector(".hero-section").style.transform =
    `translateY(${scrollY * 0.6}px)`;
});
