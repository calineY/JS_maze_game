window.onload = function () {

    var s = document.getElementById("start");
    var e = document.getElementById("end");
    var status = document.getElementById("status");
    var boundaries = document.getElementsByClassName("boundary");
    var extra_wall = document.getElementsByClassName("boundary example");
    var bottom_text = document.getElementsByTagName("p");
    var first_hover = true;     //used to not loop over divs on start
    var status_var = "start";    //used to keep track of game state
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
        mouseOnBorder(); //checks if cursor touched the boundaries
    }

    function mouseOnBorder() {
        document.addEventListener("mousemove", function (e) {
            var cursor = e.target.classList.value;
            if ((cursor == "boundary" || cursor == "boundary example") && status_var == "ingame") {
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

    function blockRightSideOfEnd() {
        extra_wall[0].style.position = "relative";
        extra_wall[0].style.left = "263px";
        extra_wall[0].style.bottom = "134px";
        extra_wall[0].style.transform = "rotate(90deg)";
    }

    s.addEventListener("mouseover", mouseOverElement);
    e.addEventListener("mouseover", youWin);
    s.addEventListener("click", resetGame);
    blockRightSideOfEnd();  //positioned the example wall to block right side of End div, so the user can't access it from the outer side of the wals
    bottom_text[0].innerHTML = "The object of this game is to guide the mouse cursor through the start area and get to the end area. Be sure to avoid the walls."; //changed punctuation


}