// on click
// if more-text === none
// change the display to inline


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


