var navbarMenuLists = document.querySelector('#lists');
var menuButton = document.querySelector('#menuBarButton');

menuButton.addEventListener('click', () => {
    if(menuButton.classList.contains('bi-list')){
        menuButton.classList.remove('bi-list');
        menuButton.classList.add('bi-x-lg');
        navbarMenuLists.classList.remove('d-none');
    }

    else{
        menuButton.classList.remove('bi-x-lg');
        menuButton.classList.add('bi-list');
        navbarMenuLists.classList.add('d-none');
    }
});
