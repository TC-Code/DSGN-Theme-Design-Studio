// Menu
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

// Menu - scroll to section
const goToProjects = document.querySelector('.header__right .hide a:nth-child(1)')
goToProjects.addEventListener('click', () => window.scrollTo({
  top: document.querySelector('.projects').offsetTop,
  left: 0,
  behavior: 'smooth'
}));

const goToStudio = document.querySelector('.header__right .hide a:nth-child(2)')
goToStudio.addEventListener('click', () => window.scrollTo({
  top: document.querySelector('.studio').offsetTop,
  left: 0,
  behavior: 'smooth'
}));

const goToNews = document.querySelector('.header__right .hide a:nth-child(3)')
goToNews.addEventListener('click', () => window.scrollTo({
  top: document.querySelector('.news').offsetTop,
  left: 0,
  behavior: 'smooth'
}));

const goToFooter = document.querySelector('.header__right .hide a:nth-child(4)')
goToFooter.addEventListener('click', () => window.scrollTo({
  top: document.querySelector('.footer').offsetTop,
  left: 0,
  behavior: 'smooth'
}));

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

// Single project - show/hide
const viewProject = document.querySelector('.fondue .view-project');
const modalWrap = document.querySelector('.modal-wrap');
const btnHideModal = document.querySelector('.fondue__details-hide');

viewProject.addEventListener('click', () => {
  modalWrap.classList.add('show');
  document.body.style.overflow = "hidden";
});

btnHideModal.addEventListener('click', () => {
  modalWrap.classList.remove('show');
  document.body.style.overflow = "auto";
});

// Fondue likes counter
const fondueHeart = document.querySelector('.fondue .heart img')

const fondueAdd = (start = 121) => {
  let number = start;
  return () => {
    number++;
    document.querySelector('.fondue .heart-counter p').textContent = `${number}`;
  }
}
const fondueCounter = fondueAdd();
fondueHeart.addEventListener('click', fondueCounter);

fondueHeart.addEventListener('click', () => {
  fondueHeart.classList.add('heart-animate');
  setTimeout(() => {
    fondueHeart.classList.remove('heart-animate');
  }, 400);
});

// Potter likes counter
const potterHeart = document.querySelector('.potter .heart img')

const potterAdd = (start = 117) => {
  let number = start;
  return () => {
    number++;
    document.querySelector('.potter .heart-counter p').textContent = `${number}`;
  }
}
const potterCounter = potterAdd();
potterHeart.addEventListener('click', potterCounter);

potterHeart.addEventListener('click', () => {
  potterHeart.classList.add('heart-animate');
  setTimeout(() => {
    potterHeart.classList.remove('heart-animate');
  }, 400);
});

// Tabano likes counter
const tabanoHeart = document.querySelector('.tabano .heart img')

const tabanoAdd = (start = 210) => {
  let number = start;
  return () => {
    number++;
    document.querySelector('.tabano .heart-counter p').textContent = `${number}`;
  }
}
const tabanoCounter = tabanoAdd();
tabanoHeart.addEventListener('click', tabanoCounter);

tabanoHeart.addEventListener('click', () => {
  tabanoHeart.classList.add('heart-animate');
  setTimeout(() => {
    tabanoHeart.classList.remove('heart-animate');
  }, 400);
});

// Louis likes counter
const louisHeart = document.querySelector('.louis .heart img')

const louisAdd = (start = 244) => {
  let number = start;
  return () => {
    number++;
    document.querySelector('.louis .heart-counter p').textContent = `${number}`;
  }
}
const louisCounter = louisAdd();
louisHeart.addEventListener('click', louisCounter);

louisHeart.addEventListener('click', () => {
  louisHeart.classList.add('heart-animate');
  setTimeout(() => {
    louisHeart.classList.remove('heart-animate');
  }, 400);
});

// Chairandottoman likes counter
const chairandottomanHeart = document.querySelector('.chairandottoman .heart img')

const chairandottomanAdd = (start = 119) => {
  let number = start;
  return () => {
    number++;
    document.querySelector('.chairandottoman .heart-counter p').textContent = `${number}`;
  }
}
const chairandottomanCounter = chairandottomanAdd();
chairandottomanHeart.addEventListener('click', chairandottomanCounter);

chairandottomanHeart.addEventListener('click', () => {
  chairandottomanHeart.classList.add('heart-animate');
  setTimeout(() => {
    chairandottomanHeart.classList.remove('heart-animate');
  }, 400);
});

// Fiji likes counter
const fijiHeart = document.querySelector('.fiji .heart img')

const fijiAdd = (start = 376) => {
  let number = start;
  return () => {
    number++;
    document.querySelector('.fiji .heart-counter p').textContent = `${number}`;
  }
}
const fijiCounter = fijiAdd();
fijiHeart.addEventListener('click', fijiCounter);

fijiHeart.addEventListener('click', () => {
  fijiHeart.classList.add('heart-animate');
  setTimeout(() => {
    fijiHeart.classList.remove('heart-animate');
  }, 400);
});

// Sesann likes counter
const sesannHeart = document.querySelector('.sesann .heart img')

const sesannAdd = (start = 238) => {
  let number = start;
  return () => {
    number++;
    document.querySelector('.sesann .heart-counter p').textContent = `${number}`;
  }
}
const sesannCounter = sesannAdd();
sesannHeart.addEventListener('click', sesannCounter);

sesannHeart.addEventListener('click', () => {
  sesannHeart.classList.add('heart-animate');
  setTimeout(() => {
    sesannHeart.classList.remove('heart-animate');
  }, 400);
});

// Alessi likes counter
const alessiHeart = document.querySelector('.alessi .heart img')

const alessiAdd = (start = 394) => {
  let number = start;
  return () => {
    number++;
    document.querySelector('.alessi .heart-counter p').textContent = `${number}`;
  }
}
const alessiCounter = alessiAdd();
alessiHeart.addEventListener('click', alessiCounter);

alessiHeart.addEventListener('click', () => {
  alessiHeart.classList.add('heart-animate');
  setTimeout(() => {
    alessiHeart.classList.remove('heart-animate');
  }, 400);
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

// Button go to top
const goToTop = document.querySelector('.btnToTop')
goToTop.addEventListener('click', () => window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
}));

// const showBtnToTop = window.innerHeight + 100;
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    goToTop.classList.add('showBtnToTop')
  } else {
    goToTop.classList.remove('showBtnToTop')
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