/* <!--===============================================================================================--> */
const profileButton = document.querySelector('#profileButton');
const profileDropdown = document.querySelector('#profileDropdown');
const menuButton = document.querySelector('#menuButton');
const sidebar = document.querySelector('#sidebar');

profileButton.addEventListener('click', () => {
    if (profileDropdown.classList.contains('d-none')) {
        profileDropdown.classList.remove('d-none');
        profileDropdown.classList.add('d-flex');
    }

    else {
        profileDropdown.classList.remove('d-flex');
        profileDropdown.classList.add('d-none');
    }
})
/* <!--===============================================================================================--> */


menuButton.addEventListener('click', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.toggle('d-md-flex');
    } else {
        sidebar.classList.toggle('d-none');
        sidebar.classList.toggle('d-flex');
    }
});
/* <!--===============================================================================================--> */
const backButton = document.querySelector('.backButton');

backButton.addEventListener('click', () => {
    sidebar.classList.remove('d-flex');
    sidebar.classList.remove('d-none');
    sidebar.classList.add('d-none');
})


