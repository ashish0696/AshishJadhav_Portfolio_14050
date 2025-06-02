


  // Animate skill bars when in view
    function animateSkillBars() {
      const skillBars = document.querySelectorAll('.progress');
      skillBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth;
      });
    }

    // Use Intersection Observer to trigger animation once
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target); // run only once
        }
      });
    }, { threshold: 0.5 });

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }