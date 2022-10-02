"use strict"

let index = 0;



function slider() {
   if (index > $a('.slide-item').length - 1) {
      index = 0
   }

   if (index < 0) {
      index = $a('.slide-item').length - 1;
   }
   let width = $('.slide-content').offsetWidth

   $('.slide-list').style.transform = `translateX(-${index * (width + 2)}px)`;
}




$('.next').addEventListener('click', () => {
   index++;
   slider()
   console.log(index);
})

$('.prev').addEventListener('click', () => {
   index--;
   slider()
   console.log(index);
})


setInterval(() => {
   index++;
   slider()
   opacity(index)
}, 5000)


function opacity(q) {
   $a('.thumbnail').forEach((e, i) => {
      if (i == q) {
         e.style.opacity = "0.5"
      } else {
         e.style.opacity = "1"

      }
   })
}

$a('.thumbnail').forEach((e, i) => {
   e.addEventListener('click', () => {
      index = i
      slider()
      opacity(index)
   })
});

const count = $('.count')

let countNum = 0

$('.plus').addEventListener('click', () => {
   countNum++
   count.innerHTML = countNum
})


$('.minus').addEventListener('click', (e) => {
   if (countNum === 0) {
      count.innerHTML = 0
   } else {
      countNum--
      count.innerHTML = countNum
   }
})


$('.icon-shop').addEventListener('click', () => {
   $('.hide').classList.toggle('cart')
})

$('.times').addEventListener('click' , ()=> {
   $('.hide').classList.toggle('cart')
})



$('.btn').addEventListener('click', () => {
   if (countNum === 0) {
      $('.hide').classList.toggle('cart')
      $('.card').innerHTML = ""
      $('.card').innerHTML = `
      <p class="cart-p">Your cart is empty</p>`
   } else {
      $('.hide').classList.toggle('cart')
      $('.card').innerHTML = ""
      $('.card').innerHTML = `

      <div class="all-prod">
      <div class="prod">
          <img src="./images/image-product-1-thumbnail.jpg" alt="produck" class="img">
          <p class="product-title">Fall Limited Edition Sneakers $125.00 x ${countNum}<span class="money">
                  $${countNum * 125}</span> </p>

          <span><img src="./images/icon-delete.svg" alt="delete" id="delete"></span>

      </div>
      <button class="checkout">Checkout</button>
  </div>`
   }

   $('#delete').addEventListener('click' , ()=>{
      $('.card').innerHTML = "";
   })
   
})


