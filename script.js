  // Get the button and the menu elements from the document
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  // Add a click event listener to the hamburger button
  mobileMenuButton.addEventListener('click', () => {
      // The toggle() method adds the class if it's not there,
      // and removes it if it is.
      mobileMenu.classList.toggle('hidden');
  });

  // Add click event listeners to each link inside the mobile menu
  mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
          // When a link is clicked, always hide the menu
          mobileMenu.classList.add('hidden');
      });
  });

 // Set current year in footer
 document.getElementById('year').textContent = new Date().getFullYear();

 // Intersection Observer for fade-in animations
 const sections = document.querySelectorAll('.hidden-section');
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('fade-in-section');
             entry.target.classList.remove('hidden-section');
             observer.unobserve(entry.target);
         }
     });
 }, { threshold: 0.1 });

 sections.forEach(section => {
     observer.observe(section);
 });
