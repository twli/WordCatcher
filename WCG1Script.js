window.addEventListener("keyup", dealWithKeyboard, false)

function dealWithKeyboard(e) {
    if(e.keyCode == 37) {//left arrowkey
        document.getElementById("leftCol").style="background-color:#7BAFD4"
    }
    if(e.keyCode == 39) {//right arrowkey
        document.getElementById("rightCol").style="background-color:#7BAFD4"
    }
    if(e.keyCode == 13) {//enter key
        alert("enter");
    }
}

