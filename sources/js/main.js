const $body = document.body;
const $button = document.querySelector('.js-page_aside__button_close');
const classNameMinimize = 'body--aside_minimize';

$button.addEventListener('click', event => {
    event.preventDefault();

    $body.classList.toggle(classNameMinimize);
})