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


let totalPrice = 0;
const greyBgItems = document.querySelectorAll('.grey-bg');
greyBgItems.forEach(item => {
  item.addEventListener('click', () => {
        item.classList.add('grid-item-highlighted')

        // seat number
        const selectedSeat = document.getElementById('selected-seat');
        const selectedSeatText = selectedSeat.innerText;
        const selectedSeatNumber = parseFloat(selectedSeatText);
        selectedSeat.innerText = selectedSeatNumber + 1;

        // total seat
        const totalSeat = document.getElementById('total-seat');
        totalSeat.innerText--;

        // append child
        const seatName = item.innerText;
        console.log(item, seatName);
        const newChild = document.createElement('div');
        newChild.innerHTML = `<div class="flex justify-between text-black opacity-60">
        <p>${seatName}</p>
        <p>Economy</p>
        <p>550</p>
      </div>`

      const seatNameContainer = document.getElementById('seat-name-div');
      seatNameContainer.appendChild(newChild);

      // total price
      totalPrice = totalPrice + 550;
      console.log(totalPrice);
  });
});