window.onload = function () {
    var s = document.getElementById("start");
    var e = document.getElementById("end");
    var status = document.getElementById("status");
    var boundaries = document.getElementsByClassName("boundary");
    var first_hover = true;
    var status_var = "start";
    var score = 0;
    function mouseOverElement() {
        status_var = "ingame";
        status.innerHTML = "Good luck";
        if (first_hover == false) {
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].style.background = "#eeeeee";
            }
        } else {
            first_hover = false;
        }

        document.addEventListener("mousemove", function (e) {
            var cursor = e.target.classList.value;
            if (cursor == "boundary" || cursor == "boundary example" && status_var == "ingame") {
                for (var i = 0; i < boundaries.length; i++) {
                    boundaries[i].style.background = "red";
                }
                score -= 10;
                status.innerHTML = "You lost" + "_Score:" + score;
                status_var = "lost";
            }
        });
    }
    function youWin() {
        if (status_var == "ingame") {
            score += 5;
            status.innerHTML = "You win" + "_Score:" + score;
            status_var = "start";
        }
    }
    function resetGame() {
        score = 0;
        status.innerHTML = "Game restarted";
    }
    s.addEventListener("mouseover", mouseOverElement);
    e.addEventListener("mouseover", youWin);
    s.addEventListener("click", resetGame)

}