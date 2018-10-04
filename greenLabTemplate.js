/*jshint esversion: 6*/
/* Initial selector/variable assignments
==============================================================================*/
const detailsBody = document.querySelectorAll('.details-column');

/* Project Details Initializer
==============================================================================*/
function addProjDetails (column, title, text) {
  detailsBody[column].innerHTML += `
    <h3>- ${title}:</h3>
    <p>${text}</p>
  `;
}
