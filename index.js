// on click
// if more-text === none
// change the display to inline


// read more function
function readMore() {
    var moreText = document.querySelector('#more-text')
    var readMore = document.querySelector('#read-more');

    if (moreText.style.display === 'none' && readMore.innerHTML === '...Read more') {
        moreText.style.display = 'inline';
        readMore.innerHTML = '...Read less'
    } else {
        moreText.style.display = "none";
        readMore.innerHTML= '...Read more'
    }
}

// to open and collapse the nav bar
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

// to close the nav bar when an option is clicked
const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))