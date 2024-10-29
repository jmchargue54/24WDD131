let reviews = [];

function storedReviews() {
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
        reviews = JSON.parse(storedReviews);
        renderReview(reviews);
    }
}

function reviewTemplate(review) {
    return `<div class="response">
                <h2>${review.name}</h1>
                <p>${review.response}</p>
            </div>`;
}

function renderReview(reviews) {
    let reviewElement = document.querySelector(".formResponses");
    const html = reviews.map(reviewTemplate);
    reviewElement.innerHTML = html.join("");
  }

function newReview() {
// get inputed reveiw info
let nameElement = document.querySelector('#nameInput');
let responseElement = document.querySelector('#reviewbox');
// make sure there is an imput
if (!nameElement.value || !responseElement.value) {
    return;
}
// add new reviews to array
const newReview = { name: nameElement.value, response: responseElement.value};
reviews.push(newReview);
// store in localStorage
localStorage.setItem('reviews', JSON.stringify(reviews));
// clear inputs
nameElement.value = ("");
responseElement.value = ("");
// add reviews to html function
renderReview(reviews);
}

function clearReviews() {
    // Clear the localStorage
    localStorage.removeItem('reviews');
    // Clear the reviews array
    reviews = [];
    // Clear the display
    renderReview(reviews);
}

function showBanner(name) {
    const bannerElement = document.querySelector('#banner');
    bannerElement.className = 'notification-banner';
    bannerElement.innerHTML =` 
    <div class="banner-content">
        <p>Thank you ${name} for leaving a review!</p>
        <button class="close-banner" aria-label="Close notification">×</button>
    </div>`;

    document.body.insertBefore(banner,document.body.firstChild);

    const closeButton = banner.querySelector('.close-banner');
    closeButton.addEventListener('click', () => {
        banner.remove();
    });

    setTimeout(() => {
        if (banner.parentNode) {
            banner.remove();
        }
    }, 10000);
}

document.querySelector('#submit').addEventListener('click', newReview);   
document.addEventListener('DOMContentLoaded', storedReviews);
document.querySelector('#clear').addEventListener('click', clearReviews);