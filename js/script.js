const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const hamburgerMenu = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

tabs.forEach((tab) => tab.addEventListener('click', onTabClick));
hamburgerMenu.addEventListener('click', navToggle);

function onTabClick(e) {
  // DEACTIVATE ALL TABS
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    );
  });

  //   HIDE ALL PANELS
  panels.forEach((panel) => panel.classList.add('hidden'));

  // ACTIVATE SELECTED PANEL
  e.target.classList.add('border-softRed', 'border-b-4');

  //  VISBILITY FOR THE DATA TARGET
  const classString = e.target.getAttribute('data-target');
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden');
}

function navToggle() {
  hamburgerMenu.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
}
