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

function setZoom(percent) {
  document.body.style.fontSize = percent + "%";
}

setZoom(33);

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
    // 1st melody.
    for (let i = 0; i < 2; i++) {
      playF4();
      playBb3();
      await delay(250);
      playE4();
      playA3();
      await delay(250);
      playF4();
      playBb3();
      await delay(500);
      playD4();
      playG3();
      await delay(500);
    }

    playF4();
    playBb3();
    await delay(250);
    playE4();
    playA3();
    await delay(250);
    playF4();
    playBb3();
    await delay(250);
    playD4();
    playG3();
    await delay(500);

    // 2nd melody.
    for (let i = 0; i < 2; i++) {
      playG4();
      playC4();
      await delay(250);
      playF4();
      playBb3();
      await delay(250);
      playG4();
      playC4();
      await delay(500);
      playE4();
      playA3();
      await delay(500);
    }

    playG4();
    playC4();
    await delay(250);
    playF4();
    playBb3();
    await delay(250);
    playG4();
    playC4();
    await delay(250);
    playE4();
    playA3();
    await delay(500);
  }

  // 3rd melody.
  for (let i = 0; i < 2; i++) {
    playBb4();
    playF4();
    await delay(250);
    playA4();
    playE4();
    await delay(250);
    playBb4();
    playF4();
    await delay(500);
    playG4();
    playD4();
    await delay(500);
  }

  playBb4();
  playF4();
  await delay(250);
  playA4();
  playE4();
  await delay(250);
  playBb4();
  playF4();
  await delay(250);
  playG4();
  playD4();
  await delay(500);

  // 4th melody.
  for (let i = 0; i < 2; i++) {
    playC5();
    playG4();
    await delay(250);
    playB4();
    playF4();
    await delay(250);
    playC5();
    playG4();
    await delay(500);
    playA4();
    playE4();
    await delay(500);
  }
  playC5();
  playG4();
  await delay(250);
  playB4();
  playF4();
  await delay(250);
  playC5();
  playG4();
  await delay(250);
  playA4();
  playE4();
  await delay(500);

  // 5th melody.
  for (let i = 0; i < 2; i++) {
    playD5();
    playBb4();
    await delay(250);
    playC5();
    playA4();
    await delay(250);
    playD5();
    playBb4();
    await delay(500);
    playBb4();
    playG4();
    await delay(500);
  }
  playD5();
  playBb4();
  await delay(250);
  playC5();
  playA4();
  await delay(250);
  playD5();
  playBb4();
  await delay(250);
  playBb4();
  playG4();
  await delay(500);

  // 6th melody.
  for (let i = 0; i < 2; i++) {
    playE5();
    playC5();
    await delay(250);
    playD5();
    playB4();
    await delay(250);
    playE5();
    playC5();
    await delay(500);
    playC5();
    playA4();
    await delay(500);
  }
  playE5();
  playC5();
  await delay(250);
  playD5();
  playB4();
  await delay(250);
  playE5();
  playC5();
  await delay(250);
  playC5();
  playA4();
  await delay(500);

  // 7th melody.
  for (let i = 0; i < 2; i++) {
    playF5();
    playD5();
    await delay(250);
    playE5();
    playC5();
    await delay(250);
    playF5();
    playD5();
    await delay(500);
    playD5();
    playBb4();
    await delay(500);
  }
  playF5();
  playD5();
  await delay(250);
  playE5();
  playC5();
  await delay(250);
  playF5();
  playD5();
  await delay(250);
  playD5();
  playBb4();
  await delay(500);

  // 8th melody.
  for (let i = 0; i < 2; i++) {
    playG5();
    playE5();
    await delay(250);
    playF5();
    playD5();
    await delay(250);
    playG5();
    playE5();
    await delay(500);
    playE5();
    playC5();
    await delay(500);
  }
  playG5();
  playE5();
  await delay(250);
  playF5();
  playD5();
  await delay(250);
  playG5();
  playE5();
  await delay(250);
  playE5();
  playC5();
  await delay(500);
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

function playBb3() {
  playNote(blackKeys[15]);
}

function playG3() {
  playNote(whiteKeys[20]);
}

function playA3() {
  playNote(whiteKeys[21]);
}

function playB3() {
  playNote(whiteKeys[22]);
}

function playC4() {
  playNote(whiteKeys[23]);
}

function playD4() {
  playNote(whiteKeys[24]);
}

function playE4() {
  playNote(whiteKeys[25]);
}

function playF4() {
  playNote(whiteKeys[26]);
}

function playG4() {
  playNote(whiteKeys[27]);
}

function playA4() {
  playNote(whiteKeys[28]);
}

function playB4() {
  playNote(whiteKeys[29]);
}

function playBb4() {
  playNote(blackKeys[20]);
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
