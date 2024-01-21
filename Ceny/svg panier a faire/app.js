let iconCart = document.querySelector('.shop');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
})