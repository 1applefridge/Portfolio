function darkMode() {
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  // Check and apply saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
    
  // Toggle theme on click
  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    icon.classList.toggle('fa-sun', !isDark);
    icon.classList.toggle('fa-moon', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
