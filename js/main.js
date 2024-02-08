let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board');

function changeBGImage() {
    puzzleBoard.getElementsByClassName.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}