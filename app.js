
// 1. burger menu mobile navigation
let menuIcon = document.querySelector('.menu-icon')
const ul = document.querySelector('ul')
const header = document.querySelector('header')

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('change')
    ul.classList.toggle('display-block')
})

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList[1] !== "change" ? header.style.height = "3.8rem" : header.style.height =  `${header.scrollHeight + 45}px`
    // menuIcon.classList[1] == "change" ? header.style.borderBottomColor = 'rgba(246, 247, 249, 0.1)' : header.style.borderBottomColor = 'transparent'
    // window.scrollY > 0 || menuIcon.classList[1] == "change" ? header.style.borderBottomColor = 'rgba(246, 247, 249, 0.1)' : header.style.borderBottomColor = 'transparent'
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        menuIcon.classList.remove('change');
        ul.classList.remove('display-block');
        header.style.height = "3.8rem";
        // header.style.height = "calc(3.25rem + 8px)";
    }
});

// // Function to handle smooth scrolling and URL update
// function scrollToTarget(targetIde) {
//     const targetElement = document.getElementById(targetIde);
//     if (targetElement) {
//         // Scroll to the target element smoothly
//         targetElement.scrollIntoView({ behavior: 'smooth' });

//         // Update URL without appending hash
//         history.pushState(null, null, window.location.pathname);
//     }
// }

// // Event listener for navigation links
// document.querySelectorAll('a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         scrollToTarget(targetId);
//     });
// });








