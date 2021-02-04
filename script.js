const toggleButton = document.getElementsByClassName('toggle-botton')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const nav = document.getElementsByClassName('navbar')[0];

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
    nav.classList.toggle('show');
});

    

