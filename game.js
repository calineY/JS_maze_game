window.onload = function () {

    var s = document.getElementById("start");
    var e = document.getElementById("end");
    var status = document.getElementById("status");
    var boundaries = document.getElementsByClassName("boundary");
    var maze = document.getElementById("game");
    var status_var = "start";    //used to keep track of game state
    var score = 0;

    function mouseOverStart() {
        e.addEventListener("mouseover", youWin);
        status_var = "ingame";
        status.innerHTML = "Good luck";
        colorBoundaries("#eeeeee");
        mouseOnBorder(); //checks if cursor touched the boundaries
    }

    function mouseOnBorder() {
        document.addEventListener("mousemove", function (e) {
            var cursor = e.target.classList.value;
            if (cursor == "boundary" && status_var == "ingame") {
                colorBoundaries("red");
                score -= 10;
                status.innerHTML = "You lost" + "_Score:" + score;
                status_var = "lost";
            }
        });
    }

    function youWin() {
        if (status_var != "lost" && status_var != "start") {
            colorBoundaries("green");
            score += 5;
            status.innerHTML = "You win" + "_Score:" + score;
            status_var = "start";
        }
    }

    function resetGame() {
        score = 0;
        status.innerHTML = "Game restarted";
    }

    function mouseLeft() {
        status.innerHTML = "Keep mouse in maze! Restart from S";
        status_var = "start";
    }

    function colorBoundaries(color) {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].style.background = color;
        }
    }

    s.addEventListener("mouseover", mouseOverStart);
    s.addEventListener("click", resetGame);
    maze.addEventListener("mouseleave", mouseLeft);

}