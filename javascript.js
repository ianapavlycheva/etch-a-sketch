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

    div.dataset.hoverCount = 0;

    div.addEventListener("mouseover", function () {
      let hoverCount = parseInt(div.dataset.hoverCount);
      hoverCount++;
      div.dataset.hoverCount = hoverCount;
      if (hoverCount === 1) {
        const randomColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
        div.style.backgroundColor = randomColor;
      } else {
        const currentColor = window.getComputedStyle(div).backgroundColor;
        div.style.backgroundColor = darkColor(currentColor, 0.1 * hoverCount);
      }
    });
    container.appendChild(div);
  }
}

function darkColor(color, percent) {
  const rgbValues = color.match(/\d+/g);
  if (!rgbValues) return color;

  const darkValues = rgbValues.map((value) =>
    Math.max(0, value * (1 - percent))
  );
  return `rgb(${darkValues.join(", ")})`;
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
