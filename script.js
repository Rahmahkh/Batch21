document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");
  const tableBody = document.querySelector(".projects-table tbody");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const projectName = event.target.projectName.value;
    const description = event.target.description.value;

    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const descriptionCell = newRow.insertCell(1);

    nameCell.innerHTML = `<a href="project-details.html">${projectName}</a>`;
    descriptionCell.textContent = description;

    form.reset();
  });
});
