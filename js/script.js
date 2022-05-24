// 3d box

var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.labels-selector');
var currentClass = '';

console.log ('hello world');

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
  
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

// burger menu

function openMenu() {
  document.getElementById("menu-slider").classList.toggle('open');
  document.getElementById("menu-burger").classList.toggle('burger-cross')
}
