const knowleges = document.querySelector('.knowleges__list');
const knowlegesItem = document.querySelectorAll('.knowleges__item');

let selectedArrow;

knowleges.addEventListener('mouseover', function (event) {
    let target = event.target;
    if (target.tagName != 'LI') return;

    target.classList.add('highlight');
})

knowleges.addEventListener('mouseout', function (event) {
    let target = event.target;
    if (target.tagName != 'LI') return;

    target.classList.remove('highlight');
})


// function animate(arrow) {
//     if (selectedArrow) {
//         selectedArrow.classList.remove('highlight');
//         console.log('HIBYE');
//     }
//     selectedArrow = arrow;
//     selectedArrow.classList.add('highlight');
//     console.log('HI');
// }

const toggleTheme = document.querySelector('.theme-toggler');
const moon = document.querySelector('.toggler-moon');
const sun = document.querySelector('.toggler-sun');
const welcomeSection = document.querySelector('.welcome-section');



toggleTheme.addEventListener('click', function () {
    document.body.classList.toggle("dark");
    moon.classList.toggle("active");
    sun.classList.toggle("active");
    welcomeSection.classList.toggle("dark");

    if (localStorage.getItem("mode")) {
        localStorage.clear();
    } else {
        localStorage.setItem("mode", "darkMode");
    }
})

if (localStorage.getItem("mode")) {
    document.body.classList.add("dark");
    moon.classList.remove("active");
    sun.classList.add("active");
    welcomeSection.classList.add("dark");
}

