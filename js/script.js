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

let rowHeight = document.querySelector('.header').clientHeight;

console.log(rowHeight);

// Google Maps

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {
    lat: -118.1893341,
    lng: 33.7652036
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}