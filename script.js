let couterCart = 0

const addToCartButton = document.querySelectorAll('.add-to-cart')
const remToCartBuutton = document.querySelectorAll('.rem-to-cart')

addToCartButton.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        couterCart++

        document.getElementById('cart-count').innerText = couterCart

    })
})

remToCartBuutton.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        if (couterCart > 0) {
            couterCart--
            document.getElementById('cart-count').innerText = couterCart
        }
    })
})
