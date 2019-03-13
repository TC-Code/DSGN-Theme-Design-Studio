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

// Poject list - arrow

const projectsList = document.querySelector('.projects-list');
const listItems = document.querySelectorAll('.projects-list__item');
const arrowHover = document.querySelectorAll('.projects-list__item img');

projectsList.addEventListener('click', (e) => {
  [...listItems].forEach(item => item.classList.remove('active'))
  e.target.classList.add('active');
});

projectsList.addEventListener('mouseover', (e) => {
  [...arrowHover].forEach(item => item.classList.remove('active-arrow'))
  e.target.classList.remove('active-arrow');
})

projectsList.addEventListener('mouseleave', () => {
  if (document.querySelector('.projects-list').classList.contains('active')) {} {
    document.querySelector('.projects-list .active img').classList.add('active-arrow')
  }
});

// Timleline
const timelineList = document.querySelector('.timeline__list');
const timelineListItems = document.querySelectorAll('.timeline__list li');
const arrowHoverTimeline = document.querySelectorAll('.timeline__list li img');

timelineList.addEventListener('click', (e) => {
  [...timelineListItems].forEach(item => item.classList.remove('active'))
  e.target.classList.add('active');
});

timelineList.addEventListener('mouseover', (e) => {
  [...arrowHoverTimeline].forEach(item => item.classList.remove('timeline__active-arrow'))
  e.target.classList.remove('timeline__active-arrow');
})

timelineList.addEventListener('mouseleave', () => {
  if (document.querySelector('.timeline__list').classList.contains('active')) {} {
    document.querySelector('.timeline__list .active img').classList.add('timeline__active-arrow')
  }
});

// Google Maps
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {
    lat: 33.7652036,
    lng: -118.1893341,
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 11,
      center: uluru,
      disableDefaultUI: true,
      styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#dbdcd5"
          }]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{
              "visibility": "on"
            }, {
              "saturation": -100
            },
            {
              "lightness": 35
            },
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6b6d62"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#cbccc6"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [{
            "color": "#cbccc6"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry",
          "stylers": [{
            "color": "#cbccc6"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#6b6d62"
            },
            {
              "weight": 0.5
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#cbccc6"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6b6d62"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#cbccc6"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6b6d62"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#cbccc6"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6b6d62"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e4e5e0"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6b6d62"
          }]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6b6d62"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{
            "color": "#9c9e93"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#9c9e93"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#c2c3bc"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6b6d62"
          }]
        }
      ]
    });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: {
      url: "images/map/pin.png",
    }
  });
}