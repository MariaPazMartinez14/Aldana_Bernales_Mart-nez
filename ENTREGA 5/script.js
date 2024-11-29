document.addEventListener('DOMContentLoaded', function() {
    const sectionsContainer = document.querySelector('.sections');
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;
  
    function scrollToSection(index) {
      if (index >= 0 && index < sections.length) {
        currentSectionIndex = index;
        sectionsContainer.style.transform = `translateY(-${currentSectionIndex * 100}vh)`;
      }
    }
  
    document.getElementById('scrollButton')?.addEventListener('click', function() {
      const nextSectionIndex = currentSectionIndex + 1;
      if (nextSectionIndex < sections.length) {
        scrollToSection(nextSectionIndex);
      }
    });
  
    document.addEventListener('wheel', function(e) {
      if (e.deltaY > 0) {
        const nextSectionIndex = currentSectionIndex + 1;
        if (nextSectionIndex < sections.length) {
          scrollToSection(nextSectionIndex);
        }
      } else {
        const prevSectionIndex = currentSectionIndex - 1;
        if (prevSectionIndex >= 0) {
          scrollToSection(prevSectionIndex);
        }
      }
    });
  
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowDown') {
        const nextSectionIndex = currentSectionIndex + 1;
        if (nextSectionIndex < sections.length) {
          scrollToSection(nextSectionIndex);
        }
      } else if (e.key === 'ArrowUp') {
        const prevSectionIndex = currentSectionIndex - 1;
        if (prevSectionIndex >= 0) {
          scrollToSection(prevSectionIndex);
        }
      }
    });
  });