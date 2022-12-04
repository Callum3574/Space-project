const dateInputSpace = document.querySelector(".date-input");
const okButton = document.querySelector("button");
okButton.addEventListener("click", () => {
  changePicture();
});

async function changePicture() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=88u7Vdtn2mchlreadL3NV33PEHngIuuEStrURSXH&date=${dateInputSpace.value}`
  );
  const data = await res.json();

  const titleContainer = document.querySelector(".title-container");
  const title = document.querySelector(".nasa-title");
  console.log(title);
  title.textContent = data["title"];
  titleContainer.append(title);

  const pictureContainer = document.querySelector(".picture-container");
  const img = document.querySelector("img");
  img.src = data["hdurl"];
  pictureContainer.appendChild(img);

  const textContainer = document.querySelector(".text-container");
  const paragraph = document.querySelector(".nasa-description");
  paragraph.innerHTML = data["explanation"];
  textContainer.appendChild(paragraph);
}
