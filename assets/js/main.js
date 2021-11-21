const bar_toogle = document.getElementById('navbar_toogle');
const menu = document.getElementById('menu');

bar_toogle.addEventListener('click', function() {
  menu.classList.toggle('active');
  bar_toogle.classList.toggle('active');
})

const bg = document.getElementsByClassName('button_bg')[0];

bg.addEventListener('click', function() {
  document.body.classList.toggle('active');
})

const hideSkills = document.getElementsByClassName('language')[0];
const btnHide = document.getElementsByClassName('hide')[0];

btnHide.addEventListener('click', function() {
  hideSkills.classList.toggle('hide');
  btnHide.classList.toggle('active_hide');
})