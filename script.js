function changeText(buttonIdtest) {
    var button = document.getElementById(buttonIdtest);
    if (button.innerHTML === "Follow") {
        button.innerHTML = "Following";
    } else {
        button.innerHTML = "Follow";
    }
}