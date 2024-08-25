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
  if (isTouchDevice()) {
    key.addEventListener("touchstart", () => playNote(key));
  } else {
    key.addEventListener("click", () => playNote(key));
  }
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
  playPythagoras();
});

async function playPythagoras() {
  for (let i = 0; i < 2; i++) {
    playF5();
    playBb4();
    await delay(250);
    playE5();
    playA4();
    await delay(250);
    playF5();
    playBb4();
    await delay(500);
    playD5();
    playG4();
    await delay(500);

    playF5();
    playBb4();
    await delay(250);
    playE5();
    playA4();
    await delay(250);
    playF5();
    playBb4();
    await delay(500);
    playD5();
    playG4();
    await delay(500);

    playF5();
    playBb4();
    await delay(250);
    playE5();
    playA4();
    await delay(250);
    playF5();
    playBb4();
    await delay(250);
    playD5();
    playG4();
    await delay(500);

    playG5();
    playC5();
    await delay(250);
    playF5();
    playBb4();
    await delay(250);
    playG5();
    playC5();
    await delay(500);
    playE5();
    playA4();
    await delay(500);

    playG5();
    playC5();
    await delay(250);
    playF5();
    playBb4();
    await delay(250);
    playG5();
    playC5();
    await delay(500);
    playE5();
    playA4();
    await delay(500);

    playG5();
    playC5();
    await delay(250);
    playF5();
    playBb4();
    await delay(250);
    playG5();
    playC5();
    await delay(250);
    playE5();
    playA4();
    await delay(500);
  }
}

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

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
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

function playC5() {
  playNote(whiteKeys[30]);
}

function playD5() {
  playNote(whiteKeys[31]);
}

function playE5() {
  playNote(whiteKeys[32]);
}

function playF5() {
  playNote(whiteKeys[33]);
}

function playG5() {
  playNote(whiteKeys[34]);
}

function playBb4() {
  playNote(blackKeys[20]);
}

function playA4() {
  playNote(whiteKeys[28]);
}

function playG4() {
  playNote(whiteKeys[27]);
}
