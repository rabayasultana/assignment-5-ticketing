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



const greyBgItems = document.querySelectorAll('.grey-bg');
greyBgItems.forEach(item => {
  item.addEventListener('click', () => {
    // Handle click event for the grey-bg item
    // console.log('Grey BG item clicked');
        // item.style.backgroundColor = '#1DD100';
        // item.style.color = 'white';
        // item.style.opacity = '1';
        item.classList.add('grid-item-highlighted')
  });
});