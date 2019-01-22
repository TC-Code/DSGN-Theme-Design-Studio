const burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
  burger.classList.toggle('change-burger-bg');
});

burger.addEventListener('click', function () {
  document.querySelector('.hide').classList.toggle('changebg');
});

burger.addEventListener('click', function () {
  document.querySelector('.burger span:nth-child(1)').classList.toggle('burger-bar1');
});

burger.addEventListener('click', function () {
  document.querySelector('.burger span:nth-child(2)').classList.toggle('burger-bar2');
});

burger.addEventListener('click', function () {
  document.querySelector('.burger span:nth-child(3)').classList.toggle('burger-bar3');
});

const linkClick = document.querySelectorAll('.hide a');
[...linkClick].forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.hide').classList.toggle('changebg');
    document.querySelector('.burger').classList.toggle('change-burger-bg');
    document.querySelector('.burger span:nth-child(1)').classList.toggle('burger-bar1');
    document.querySelector('.burger span:nth-child(2)').classList.toggle('burger-bar2');
    document.querySelector('.burger span:nth-child(3)').classList.toggle('burger-bar3');
  })
})