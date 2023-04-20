const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

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
