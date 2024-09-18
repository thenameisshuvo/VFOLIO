const links = document.querySelectorAll('#mainmenu ul li a');

links.forEach(link => {
  link.addEventListener('click', function (event) {
    links.forEach(link => {
      link.parentElement.classList.remove('active');
    });
    this.parentElement.classList.add('active');
  });
});

module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-color': '#4c51bf', // Indigo
        'secondary-color': '#38a169', // Emerald
        'bg-color': '#f7fafc', // Light background color
        'bg-dark-color': '#2d3748', // Dark background color
      },
    },
  },
}
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
}
