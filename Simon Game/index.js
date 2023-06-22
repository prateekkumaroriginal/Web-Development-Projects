colors = ["green", "red", "yellow", "blue"];
gamePattern = [];
userClickedPattern = [];
has_started = false;
level = 0;

$(document).on("keydown", function () {
    if (!has_started) {
        nextColor();
        has_started = true;
    }
});

$(".btn").on("click", colorClicked);

function nextColor() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    randomColor = colors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomColor);
    flash(randomColor);
    playSound(randomColor);
}

function colorClicked() {
    color = this.id;
    playSound(color);
    $("#" + color).addClass("pressed");
    setTimeout(function () {
        $("#" + color).removeClass("pressed");
    }, 100)
    userClickedPattern.push(color);
    checkAnswer(userClickedPattern.length - 1)
}

function flash(color) {
    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name) {
    let audio = new Audio("/sounds/" + name + '.mp3');
    audio.play();
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(nextColor, 1000);
        }
    }
    else {
        $("#level-title").text("Game Over! Press any key to restart.");
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 100);
        reset();
    }
}

function reset() {
    has_started = false;
    gamePattern = [];
    level = 0
}