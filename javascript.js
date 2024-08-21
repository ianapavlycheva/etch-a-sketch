const container = document.getElementById("gridContainer");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-square");

  div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "black";
  });

  container.appendChild(div);
}
