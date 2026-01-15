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

// document.addEventListener('mousemove', function(e) {
   
//     const trail = document.createElement('div');
//     trail.classList.add('trail-element');
//     trail.style.left = e.pageX + 'px';
//     trail.style.top = e.pageY + 'px';
//     document.body.appendChild(trail);
//     setTimeout(function() {
//         trail.style.opacity = '0';
//         setTimeout(function() {
//             trail.remove();
//         }, 500); // Must match the CSS transition time
//     }, 50); // Controls how often a new segment is created (shorter = smoother trail)
// });
console.clear();

// Select the circle element
const circleElement = document.querySelector('.circle');

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 } // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

// Update mouse position on the 'mousemove' event
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.17;

// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  // 1. Calculate the change in mouse position (deltaMouse)
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  // Update previous mouse position for the next frame
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  // 3. Convert mouse velocity to a value in the range [0, 0.5]
  const scaleValue = (mouseVelocity / 150) * 0.5;
  // 4. Smoothly update the current scale
  currentScale += (scaleValue - currentScale) * speed;
  // 5. Create a transformation string for scaling
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  // ROTATE
  // 1. Calculate the angle using the atan2 function
  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  // 2. Check for a threshold to reduce shakiness at low mouse velocity
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  // 3. Create a transformation string for rotation
  const rotateTransform = `rotate(${currentAngle}deg)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
}

// Start the animation loop
tick();
// To create a more continuous line, you might use a smaller interval (5-10ms)
// or use the 'requestAnimationFrame' method for smoother, performance-optimized animation.
// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;

//   document.querySelector(".hero-section").style.transform =
//     `translateY(${scrollY * 0.2}px)`;

//   document.querySelector(".hero-section").style.transform =
//     `translateY(${scrollY * 0.4}px)`;

//   document.querySelector(".hero-section").style.transform =
//     `translateY(${scrollY * 0.6}px)`;
// });
$(document).ready(function () {
   // Show or hide the button
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.scroll-up').fadeIn();
      } else {
         $('.scroll-up').fadeOut();
      }
   });
   // Scroll to top when button clicked
   $('.scroll-up').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
   });
})
// function emailSend(){
//     const email = {
//   from: 'sender@example.com',
//   to: 'recipient@example.com',
//   subject: 'Test email',
//   text: 'This is a test email sent from the browser'
// }
// smtp.sendMail(email)
//   .then(info => console.log(info))
//   .catch(err => console.error(err))
// }











