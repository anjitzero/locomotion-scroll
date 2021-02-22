
const scroll = new LocomotiveScroll({
     el: document.querySelector('[data-scroll-container]'),
     smooth: true,
     repeat: true,
     // getDirection: true,
     // getSpeed:5,
     class: 'active',
     offset: ["30%", 0],
     multiplier: .6,
})
