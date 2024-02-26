const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', jump);

function jump(event) {
    if (event.code === 'Space') {
        if (dino.classList !== 'jump') {
            dino.classList.add('jump');

            setTimeout(() => {
                dino.classList.remove('jump');
            }, 500);
        }
    }
}

function checkCollision() {
    const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    const cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));

    if (cactusRight < 50 && cactusRight > 0 && dinoBottom <= 50) {
        alert('Game Over!');
        location.reload(); // Reload the game on collision
    }
}

setInterval(checkCollision, 10);
