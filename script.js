const WHITE_KEYS = [
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
];
const BLACK_KEYS = [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "+",
];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}

const button = document.getElementById("button_id");
button.addEventListener("click", () => {
  playSong();
});

async function playSong() {
  playC3();
  await delay(2000);
  playE3();
  await delay(2000);
  playG3();
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function playC3() {
  playNote(whiteKeys[16]);
  playNote(whiteKeys[18]);
  playNote(whiteKeys[20]);
}

function playE3() {
  playNote(whiteKeys[18]);
  playNote(blackKeys[14]);
  playNote(whiteKeys[22]);
}

function playG3() {
  playNote(whiteKeys[20]);
  playNote(whiteKeys[22]);
  playNote(whiteKeys[24]);
}
