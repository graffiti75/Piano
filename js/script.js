const keys = document.querySelectorAll(".key");
const checkbox = document.querySelector(".checkbox__keys");
const switcher = document.querySelector(".switcher");
const keysSection = document.querySelector(".piano__keys");
const button = document.getElementById("button");

const playNote = (note) => {
  const audio = new Audio(`notes/${note}.mp3`);
  audio.play();
};

const handleMouseDown = (key) => {
  playNote(key.getAttribute("data-note"));
  if (key.className.includes("black")) {
    key.classList.add("black--pressed");
    return;
  }
  key.style.background = "#ddd";
};

const handleMouseUp = (key) => {
  if (key.className.includes("black")) {
    key.classList.remove("black--pressed");
    return;
  }
  key.style.background = "white";
};

button.addEventListener("mousedown", () => {
  playPythagoras();
});

keys.forEach((key) => {
  key.addEventListener("mousedown", () => handleMouseDown(key));
  key.addEventListener("mouseup", () => handleMouseUp(key));
});

checkbox.addEventListener("change", ({ target }) => {
  if (target.checked) {
    switcher.classList.add("switcher--active");
    keysSection.classList.remove("disabled-keys");
    return;
  }
  switcher.classList.remove("switcher--active");
  keysSection.classList.add("disabled-keys");
});

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function playPitagoras() {
  playNote(A5);
  await delay(500);
  playNote(A9);
}
