// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('2024-12-31T00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);

// Leaderboard
const leaderboardData = [
    { rank: 1, team: 'Team Alpha', score: 250 },
    { rank: 2, team: 'Firestone', score: 230 },
    { rank: 3, team: 'Phoenix Squad', score: 210 },
    { rank: 4, team: 'Shadow Ops', score: 190 },
    { rank: 5, team: 'Blaze Warriors', score: 170 },
];

function populateLeaderboard() {
    const leaderboardBody = document.querySelector('#leaderboard tbody');
    leaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.team}</td>
            <td>${entry.score}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

populateLeaderboard();

// Registration Form
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration submitted successfully!');
    registrationForm.reset();
});

// Gallery
const galleryImages = [
    'https://placehold.co/600x400?text=Image+1',
    'https://placehold.co/600x400?text=Image+2',
    'https://placehold.co/600x400?text=Image+3',
    'https://placehold.co/600x400?text=Image+4',
    'https://placehold.co/600x400?text=Image+5',
    'https://placehold.co/600x400?text=Image+6',
];

let currentImageIndex = 0;

function updateMainImage() {
    document.getElementById('main-gallery-image').src = galleryImages[currentImageIndex];
}

document.getElementById('prev-image').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateMainImage();
});

document.getElementById('next-image').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateMainImage();
});

function populateThumbnails() {
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    galleryImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Thumbnail ${index + 1}`;
        img.addEventListener('click', function() {
            currentImageIndex = index;
            updateMainImage();
        });
        thumbnailContainer.appendChild(img);
    });
}

populateThumbnails();

// Contact Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});