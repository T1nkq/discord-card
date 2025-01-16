const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');

const savedTab = localStorage.getItem('activeTab');
if (!savedTab) {
  document.querySelector('[data-tab="tab-2"]').classList.add('active-bar');
  document.getElementById('tab-2').classList.remove('hidden');
}

tabsTitle.forEach(item => item.addEventListener('click', event => {

  const tabsTitleTarget = event.target.getAttribute('data-tab');

  tabsTitle.forEach(element => element.classList.remove('active-bar'));

  item.classList.add('active-bar');

  tabsContent.forEach(element => element.classList.add('hidden'));

  document.getElementById(tabsTitleTarget).classList.remove('hidden');

  localStorage.setItem('activeTab', tabsTitleTarget);

}));

document.querySelector('[data-tab="tab-1"]').classList.add('active-bar');
document.querySelector('#tab-1').classList.remove('hidden');