// Theme switching functionality
const themeToggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme
document.documentElement.setAttribute('data-theme', 
    localStorage.getItem('theme') || 
    (prefersDark.matches ? 'dark' : 'light')
);

themeToggle.addEventListener('click', () => {
    themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => themeToggle.style.transform = '', 150);

    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Enhanced mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    const icon = mobileMenuBtn.querySelector('i');
    
    // Toggle menu state
    navLinks.classList.toggle('active');
    
    // Update icon and button state
    if (!isOpen) {
        icon.className = 'ri-close-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
        icon.className = 'ri-menu-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && 
        !e.target.closest('.mobile-menu') && 
        navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Enhanced active link handling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        e.target.closest('.nav-link').classList.add('active');
        
        // Close mobile menu after link click
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// Add animation to nav links
const navLinkItems = document.querySelectorAll('.nav-link');
navLinkItems.forEach((link, index) => {
    link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
});

// Add hover effect to logo
const logo = document.querySelector('.nav-logo');
logo.addEventListener('mousemove', (e) => {
    const bound = logo.getBoundingClientRect();
    const x = e.clientX - bound.left;
    const y = e.clientY - bound.top;
    
    logo.style.setProperty('--x', `${x}px`);
    logo.style.setProperty('--y', `${y}px`);
});


/*Start Slaider JS*/

let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// Function to show a specific slide
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark its corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to advance to the next slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Automatically advance to the next slide every 3 seconds (3000 milliseconds)
setInterval(function () {
  plusSlides(1);
}, 5000);

// Initialize the slider
showSlides(slideIndex);


/*End Slaider JS*/


/* Startd Contact JS*/

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


/*End Contact JS*/

