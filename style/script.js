
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check localStorage for saved mode
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.classList.replace('fa-moon', 'fa-sun');
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      toggle.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      toggle.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

