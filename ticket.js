const allBtn = document.querySelectorAll(".btn");
let count = 0;
let seats = document.getElementById("available-Seat").innerText;
let availableSeats = parseFloat(seats);
const priceOfTicket = document.getElementById("fare").innerText;
let totalPrice = document.getElementById("total-price").innerText;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        if (count < 4 && !btn.classList.contains('disable')) {
            count += 1;
            availableSeats--;
            e.target.style.backgroundColor = 'green';
            e.target.style.color = 'white';

            const seatNumber = e.target.innerText;
            console.log(seatNumber)
            const selectedSeatPrice = document.getElementById("selected-seat-price");

            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerText = seatNumber;
            const p2 = document.createElement("p");
            p2.innerText = "Economy";
            const p3 = document.createElement("p")
            p3.innerText = priceOfTicket;
            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);

            selectedSeatPrice.appendChild(li);
            totalPrice = parseFloat(totalPrice) + parseFloat(priceOfTicket);

            setInnerText("seat-count", count);
            setInnerText("total-price", totalPrice)
            setInnerText("available-Seat", availableSeats)
            setInnerText("grand-total", totalPrice)

        }
        else {
            alert("You have already selected the maximum number of seats");
        }
    })
}
const applyBtn = document.getElementById("coupon-button");
applyBtn.addEventListener("click", function () {
    const couponInputField = document.getElementById("coupon-field")
    const couponInput = couponInputField.value;
    const couponCode = couponInput.split(" ").join("").toUpperCase();
    let discount, grandTotalPrice;
    if (count === 4) {
        const discountPrice = document.getElementById("grand-total")
        if (couponCode === "NEW15") {
            discount = parseFloat(priceOfTicket) * 0.15.toFixed(2);
            grandTotalPrice = totalPrice - discount;
            discountPrice.innerText = grandTotalPrice;
            couponInputField.value = "";
            console.log(typeof (discount), discount, grandTotalPrice);
        } else if (couponCode === "COUPLE20") {
            discount = parseFloat(priceOfTicket) * 0.20.toFixed(2);
            grandTotalPrice = totalPrice - discount;
            discountPrice.innerText = grandTotalPrice;
            couponInputField.value = "";
            console.log(typeof (discount), discount, grandTotalPrice)
        }
        else {
            alert("Invalid Input")
            couponInputField.value = "";
            discountPrice.innerText = totalPrice;
        }
    } else {
        alert("Please select at least 4 seats")
        couponInputField.value = "";
    }


})
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modal-btn");
const continueBtn = document.getElementById("continue-button");
const nameOfPassanger = document.getElementById("name");
const phoneNumber = document.getElementById("phone-number");
const phNumber = parseInt(phoneNumber.value)


// nameOfPassanger.addEventListener("click", function () {
//     console.log(nameOfPassanger.value);
// })
// phoneNumber.addEventListener("click", function () {
//     console.log(typeof phNumber);
// })
modalBtn.addEventListener("click", function () {
    modal.classList.remove("hidden");
 
})

continueBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
})

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}