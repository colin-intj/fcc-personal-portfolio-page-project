/**
 * This function adjusts the top margin of a non-fixed element in a container
 * with a fixed one above it so that the fixed element doesn't possibly overlap
 * with it.
 * @param {htmlElement} fixedElement
 * @param {htmlElement} notFixedElement
 */
function adjustNotFixedElement(fixedElement, notFixedElement) {
  notFixedElement.style.marginTop = fixedElement.offsetHeight + 'px';
}

const projectName = 'portfolio';

const navbar = document.getElementById('navbar');
const header = document.getElementById('header');

adjustNotFixedElement(navbar, header);

window.addEventListener('resize', function() {
  adjustNotFixedElement(navbar, header);
});
