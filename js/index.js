
// first event listener ===========================
let animateHeading = document.querySelector('.logo-heading');
animateHeading.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'yellow';
});

animateHeading.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'white';
});

// second event listener ===========================

window.addEventListener("load", function(event) {
    alert("Get Ready For The Fun Bus!");
});

// third event listener ===========================

let changeHeader = document.querySelector('.main-navigation')
changeHeader.addEventListener('click', () => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'yellow'
})

// fourth event listener ===========================

let animateBottom = document.querySelector('.destination')
animateBottom.addEventListener('mouseup', () => {
    alert('Hey you clicked me !')
})

// fifth event listener ===========================

let animateBTN = document.querySelectorAll('.btn');
for (let i = 0; i<animateBTN.length; i++) {
    animateBTN[i].addEventListener('click', () => {
    event.target.style.color = 'orange'
 })
}

// sixth event listener ===========================

const contentImage = document.querySelector('.img-content')
contentImage.addEventListener('mouseenter', () => {
    contentImage.style.transform = "scale(1.2)";
    contentImage.style.transition = "all 0.3s";
  })

  contentImage.addEventListener('mouseleave', () => {
    contentImage.style.transform = "scale(1)"
  })
// seventh event listener ===========================

const stopLinks = document.querySelectorAll('.nav')


stopLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    event.target.style.color = 'red'
  })
})

// eight event listener ===========================

const changeImage = document.querySelector('.intro img');
console.log(changeImage)
changeImage.addEventListener('dblclick', () => {
  changeImage.src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80";
})

// ninth event listener ===========================

const resizeImage = document.querySelector('.img-content img')
window.addEventListener('resize', () => {
  resizeImage.src = "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
})

// tenth event listener ===========================
document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
