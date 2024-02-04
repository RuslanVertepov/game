document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("snakeCanvas");
    const context = canvas.getContext("2d");
  
    const gridSize = 20;
    const snake = [{ x: 5, y: 5 }];
    const food = { x: 15, y: 15 };
    let direction = "right";
  
    function draw() {

      context.clearRect(0, 0, canvas.width, canvas.height);
  
      context.fillStyle = "#2ecc71";
      snake.forEach((segment) => {
        context.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
      });
  
      context.fillStyle = "#e74c3c";
      context.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }
  
    function move() {
      const head = { ...snake[0] };
  
      switch (direction) {
        case "up":
          head.y--;
          break;
        case "down":
          head.y++;
          break;
        case "left":
          head.x--;
          break;
        case "right":
          head.x++;
          break;
      }
  
      if (head.x === food.x && head.y === food.y) {
        snake.unshift({ ...head });
        generateFood();
      } else {
        snake.unshift({ ...head });
        snake.pop();
      }
  
      if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= canvas.width / gridSize ||
        head.y >= canvas.height / gridSize ||
        checkCollision()
      ) {
        alert("Игра закончена! Нажмите ОК, чтобы перезапустить.");
        resetGame();
      }
  
      draw();
    }
  
    function checkCollision() {

      return snake.slice(1).some((segment) => segment.x === snake[0].x && segment.y === snake[0].y);
    }
  
    function generateFood() {

      food.x = Math.floor(Math.random() * (canvas.width / gridSize));
      food.y = Math.floor(Math.random() * (canvas.height / gridSize));
  
      if (snake.some((segment) => segment.x === food.x && segment.y === food.y)) {
        generateFood();
      }
    }
  
    function resetGame() {
      snake.length = 1;
      snake[0] = { x: 5, y: 5 };
      direction = "right";
      generateFood();
    }
  
    document.addEventListener("keydown", function (event) {

      switch (event.key) {
        case "ArrowUp":
          direction = "up";
          break;
        case "ArrowDown":
          direction = "down";
          break;
        case "ArrowLeft":
          direction = "left";
          break;
        case "ArrowRight":
          direction = "right";
          break;
      }
    });
  
    setInterval(move, 200);
  });
  document.addEventListener("DOMContentLoaded", function () {
    alert("Добро пожаловать в игру Змейка!");
  
    window.addEventListener("beforeunload", function () {
      return confirm("Вы уверены, что хотите покинуть игру? До свидания!");
    });
  
    const canvas = document.getElementById("snakeCanvas");
    canvas.addEventListener("mouseover", function () {
      canvas.style.backgroundColor = "#ecdbf0";
    });
  
    canvas.addEventListener("mouseout", function () {
      canvas.style.backgroundColor = "#ecf0f1";
    });
  
    const playerName = prompt("Введите ваше имя:");
  
    const welcomeBlock = document.createElement("div");
    welcomeBlock.className = "welcome-block";
    document.body.appendChild(welcomeBlock);
  
    const playerInfo = document.createElement("div");
    playerInfo.textContent = `Привет, ${playerName}! Управляйте змейкой с помощью стрелок.`;
    welcomeBlock.appendChild(playerInfo);
  
    const gameOverMessage = document.createElement("div");
    document.body.appendChild(gameOverMessage);
  });