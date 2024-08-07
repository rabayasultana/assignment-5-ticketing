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
        item.classList.add('grid-item-highlighted')

        // seat number
        const selectedSeat = document.getElementById('selected-seat');
        const selectedSeatText = selectedSeat.innerText;
        const selectedSeatNumber = parseFloat(selectedSeatText);
        selectedSeat.innerText = selectedSeatNumber + 1;
  });
});