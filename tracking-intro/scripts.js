(function(){
    const hamburger = document.querySelector('#hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('show');
        menu.classList.toggle('show');
    });
})();