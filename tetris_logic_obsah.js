
let grid = [];
let score = 0;
let timer = 0;
let questionActive = false;
let correctAnswer = 0;
let userInput = "";

function setup() {
  createCanvas(300, 400);
  frameRate(30);
  for (let i = 0; i < 20; i++) {
    grid[i] = [];
    for (let j = 0; j < 10; j++) {
      grid[i][j] = 0;
    }
  }
}

function draw() {
  background(220);
  drawGrid();
  timer++;

  if (timer % (15 * 30) === 0 && !questionActive) {
    askQuestion();
  }

  if (questionActive) {
    fill(0);
    textSize(16);
    text("Obsah útvaru na spodku (v cm²):", 10, 350);
    text("Tvoja odpoveď: " + userInput, 10, 370);
  }

  fill(0);
  textSize(14);
  text("Skóre: " + score, 10, 20);
}

function keyPressed() {
  if (!questionActive) return;

  if (keyCode === ENTER) {
    if (parseInt(userInput) === correctAnswer) {
      score += 100;
    } else {
      score -= 100;
    }
    userInput = "";
    questionActive = false;
  } else if (keyCode === BACKSPACE) {
    userInput = userInput.slice(0, -1);
  } else if (key >= '0' && key <= '9') {
    userInput += key;
  }
}

function drawGrid() {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j] === 1) {
        fill(100, 200, 100);
        rect(j * 30, i * 20, 30, 20);
      }
    }
  }
}

function askQuestion() {
  let count = 0;
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j] === 1) count++;
    }
  }
  correctAnswer = count;
  questionActive = true;
}
console.log("✅ JS načítaný");

function setup() {
  createCanvas(300, 400);
  console.log("🎮 setup() spustený");
}

function draw() {
  background(220);
  console.log("🔁 draw() cyklus");
}
