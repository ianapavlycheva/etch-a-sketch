const container = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");

function createGrid(squaresPerSide) {
  container.innerHTML = "";

  const totalSize = 480;
  const squareSize = totalSize / squaresPerSide;

  container.style.width = `${totalSize}px`;
  container.style.height = `${totalSize}px`;

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "black";
    });

    container.appendChild(div);
  }
}

createGrid(16);

newGridButton.addEventListener("click", function () {
  let squaresPerSide = prompt(
    "Enter the number of squares per side for the new grid (max 100):"
  );

  if (squaresPerSide !== null) {
    squaresPerSide = parseInt(squaresPerSide);
    if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
      alert("Please enter a valid number between 1 and 100.");
    } else {
      createGrid(squaresPerSide);
    }
  }
});
