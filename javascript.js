const container = document.getElementById("gridContainer");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-square");
  container.appendChild(div);
}
