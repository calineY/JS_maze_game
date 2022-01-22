window.onload = function () {
    var s = document.getElementById("start");
    var status = document.getElementById("status");
    var boundaries = document.getElementsByClassName("boundary");
    var first_hover = true;
    function mouseOverElement() {
        if (first_hover == false) {
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].style.background = "#eeeee";
            }
        } else {
            first_hover = false;
        }
        document.addEventListener("mousemove", function (e) {
            var cursor = e.target.classList.value;
            if (cursor == "boundary") {
                status.innerHTML = "You lost";
                for (var i = 0; i < boundaries.length; i++) {
                    boundaries[i].style.background = "red";
                }
            }
        });
    }
    s.addEventListener("mouseover", mouseOverElement);
}