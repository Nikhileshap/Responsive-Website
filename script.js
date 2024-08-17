document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        var navLinks = document.getElementById("nav-links");
        navLinks.classList.remove("active");
    });
});





window.addEventListener('scroll', function() {
    const car = document.getElementById('first-img');
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight; 
    const maxMove = window.innerWidth * 2 - car.clientWidth; 

    const moveDistance = (scrollPosition / maxScroll) * maxMove; 
    car.style.transform = `translateX(${moveDistance}px)`; 
});


function goBack() {
    window.location.href = 'index.html' ;
}





function changeCarColor(color) {
    const carImage = document.getElementById('car-image');
    
    switch(color) {
        case 'wheel1':
            carImage.src = 'colorwheel/red-car.jpg'; // Ensure the path is correct
            break;
        case 'black':
            carImage.src = 'colorwheel/black-car.jpg'; // Ensure the path is correct
            break;
        case 'white':
            carImage.src = 'colorwheel/white-car.jpg'; // Ensure the path is correct
            break;
        case 'blue':
            carImage.src = 'colorwheel/blue-car.jpg'; // Ensure the path is correct
            break;
        case 'gray':
            carImage.src = 'colorwheel/gray-car.jpg'; // Ensure the path is correct
            break;
        case 'mintgreen':
            carImage.src = 'colorwheel/p mintgreen.jpg';
            break;
        default:
            carImage.src = 'colorwheel/red-car.jpg'; // Fallback image
    }
}

function changeCarWheels(wheel) {
    const carWithWheels = document.getElementById('car-with-wheels');

    switch (wheel) {
        case 'wheel1':
            carWithWheels.src = 'colorwheel/whlA.webp'; // Set the path to the image with the selected wheel
            break;
        case 'wheel2':
            carWithWheels.src = 'colorwheel/whlB.webp'; // Set the path to the image with the selected wheel
            break;
        case 'wheel3':
            carWithWheels.src = 'colorwheel/whlC.webp'; // Set the path to the image with the selected wheel
            break;
        case 'wheel4':
            carWithWheels.src = 'colorwheel/whlD.webp'; // Set the path to the image with the selected wheel
            break;
        default:
            carWithWheels.src = 'colorwheel/whlA.webp'; // Fallback image
    }
}






const video = document.getElementById('customVideo');

// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
            video.muted = false; // Play with sound when in view
        } else {
            video.pause();
            video.muted = true; // Mute when out of view
        }
    });
}, {
    threshold: 0.5 // Play video when 50% of it is in view
});

// Observe the video element
observer.observe(video);


