/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let dropBtn = document.getElementsByClassName('dropdown');
let menu = document.getElementsByClassName('dropdown-menu');
dropBtn[0].addEventListener('click', function(){
    menu[0].classList.toggle('show');
})

let dropBtn2 = document.getElementsByClassName('two');
let menu2 = document.getElementsByClassName('twoo');
dropBtn2[0].addEventListener('click', function(){
    menu2[0].classList.toggle('show');
})



