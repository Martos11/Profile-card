// ====== NAVBAR HAMBURGER MENU ======
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navbar = document.querySelector(".navbar");
  
    // Toggle the mobile menu
    // navToggle.addEventListener("click", () => {
    //   navLinks.classList.toggle("active");
    // });
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        navToggle.classList.toggle("active"); // <-- for animation
      });
      
  
    // Hide / show navbar on scroll
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-70px"; // hides when scrolling down
      } else {
        navbar.style.top = "0"; // shows when scrolling up
      }
  
      lastScrollTop = scrollTop;
    });
  });

  function updateTime() {
    const timeElement = document.getElementById("current-time");
    if (timeElement) {
      timeElement.textContent = Date.now();
    }
  }
  
  updateTime();
  setInterval(updateTime, 1000);

  
  // ====== PROFILE PAGE TIMER ======
//   const timeElement = document.getElementById("current-time");
//   if (timeElement) {
//     function updateTime() {
//       timeElement.textContent = Date.now();
//     }
//     updateTime();
//     setInterval(updateTime, 1000);
//   }
  
  // ====== CONTACT FORM VALIDATION ======
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Validation flags
      let isValid = true;
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
  
      // Name validation
      if (name === "") {
        alert("Full Name is required.");
        isValid = false;
      }
  
      // Email validation
      const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (email === "") {
        alert("Email is required.");
        isValid = false;
      } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
      }
  
      // Subject validation
      if (subject === "") {
        alert("Subject is required.");
        isValid = false;
      }
  
      // Message validation
      if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        isValid = false;
      }
  
      // Success feedback
      if (isValid) {
        alert("✅ Message sent successfully!");
        form.reset();
      }
    });
  }
  