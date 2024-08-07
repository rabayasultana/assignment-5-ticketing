tailwind.config = {
  theme: {
    extend: {
      colors: {
        "color-text": "#1DD100",
      },
    },
  },
};

document
  .getElementById("scroll-down-btn")
  .addEventListener("click", function () {
    const targetSection = document.getElementById("target-section");
    targetSection.scrollIntoView();
  });

// grid items count
let count = 0;

// add event listener to grid items
const greyBgItems = document.querySelectorAll(".grey-bg");

greyBgItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (count < 4 && !item.classList.contains("grid-item-highlighted")) {
      item.classList.add("grid-item-highlighted");
      count++;

      // seat number
      const selectedSeat = document.getElementById("selected-seat");
      const selectedSeatText = selectedSeat.innerText;
      const selectedSeatNumber = parseFloat(selectedSeatText);
      selectedSeat.innerText = selectedSeatNumber + 1;

      // total seat
      const totalSeat = document.getElementById("total-seat");
      const totalSeatText = totalSeat.innerText;
      const totalSeatNumber = parseFloat(totalSeatText);
      totalSeat.innerText = totalSeatNumber - 1;

      // append child
      const seatName = item.innerText;
      const newChild = document.createElement("div");
      newChild.innerHTML = `<div class="flex justify-between text-black opacity-60">
        <p>${seatName}</p>
        <p>Economy</p>
        <p>550</p>
      </div>`;

      const seatNameContainer = document.getElementById("seat-name-div");
      seatNameContainer.appendChild(newChild);

      // total price
      const totalPriceElement = document.getElementById("total-price");
      const totalPriceText = totalPriceElement.innerText;
      const totalPriceNumber = parseFloat(totalPriceText);
      let totalPrice = totalPriceNumber + 550;
      totalPriceElement.innerText = totalPrice;

      // grand total
      const grandTotalElement = document.getElementById("grand-total");
      let grandTotal = totalPrice;
      grandTotalElement.innerText = totalPrice;

      // next button
      const phoneNumberInput = document.getElementById("phone-number");
      const nextButton = document.getElementById("next-button");

      phoneNumberInput.addEventListener("keyup", function (event) {
        nextButton.removeAttribute("disabled");
      });

      // apply button for coupon code
      const applyButton = document.getElementById("apply-button");
      if (count == 4) {
        applyButton.removeAttribute("disabled");

        //  coupon code and discount
        applyButton.addEventListener("click", () => {
          const couponCodeInput = document.getElementById("coupon-code-input");
          const text = couponCodeInput.value;
          // console.log(text);

          let discount = 0;
          if (text == "NEW15") {
            discount = (totalPrice * 15) / 100;
          } else if (text == "Couple 20") {
            discount = (totalPrice * 20) / 100;
          } else {
            alert("Invalid Coupon code");
          }
          // updating grandtotal
          grandTotal = totalPrice - discount;
          grandTotalElement.innerText = grandTotal;

          // append discount price
          if (discount !== 0) {
            const discountDiv = document.createElement("div");
            discountDiv.innerHTML = ` <div class="flex justify-between font-medium">
    <p>Discounted Price</p>
    <p>BDT ${discount}</p>
  </div>`;

            const priceContainer = document.getElementById("price-div");
            priceContainer.appendChild(discountDiv);

            const couponApplyDiv = document.getElementById("coupon-apply-div");
            couponApplyDiv.classList.add("hidden");
          }
        });
      }
    }
    else {
      alert("You have crossed the limit to select seat");
    }
  });
});
