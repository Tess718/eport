const lightModeRadio = document.getElementById('lightMode');
const darkModeRadio = document.getElementById('darkMode');

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark_theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark_theme');
    localStorage.setItem('theme', 'light');
  }
}

// Check if a theme preference is stored in localStorage
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
  setTheme('dark'); // Apply the stored dark theme
  darkModeRadio.checked = true; // Check the dark mode radio button
} else {
  setTheme('light'); // Default to light mode if no preference is stored
}

lightModeRadio.addEventListener('change', () => {
  setTheme('light');
});

darkModeRadio.addEventListener('change', () => {
  setTheme('dark');
});
