const simpleNav = document.querySelector('.simpleNav');
const arrowToggle = document.querySelector('.toggle');

arrowToggle.addEventListener('click', () => {
    const visibility = simpleNav.getAttribute("data-active");
    if (visibility === "false") {
        simpleNav.setAttribute('data-active', true);
        arrowToggle.setAttribute('data-active', true);
    } else if (visibility === "true") {
        simpleNav.setAttribute('data-active', false);
        arrowToggle.setAttribute('data-active', false);
    }
})