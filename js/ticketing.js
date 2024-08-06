console.log('ticketing')
tailwind.config = {
    theme: {
      extend: {
        colors: {
          "color-text": "#1DD100",
        },
      },
    },
  };

  document.getElementById('scroll-down-btn').addEventListener('click',function(){
const targetSection = document.getElementById('target-section');
targetSection.scrollIntoView({ behavior: 'smooth' })
  })