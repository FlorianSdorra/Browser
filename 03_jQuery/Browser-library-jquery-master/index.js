$(document).ready(function () {
    $('section.info__form').on('click', 'input.submit', function () {
        $('.modal').show();
    })
    $('.modal-close').on('click', function () {
        $('.modal').hide();
    })
    $('.teapot').on('click', function () {

        $(this).toggleClass('teapot-rotate');
    })
    let phrases = ['Great tea for a cold night', 'Rich in flavors', 'Nice tea'];
    $('.tea-desc').on('mouseover', function () {
        let str = phrases[Math.floor(Math.random() * 3)];
        $(this).text(str);
    })
});