
var n = document.querySelectorAll(".drum").length;

for (let i = 0; i < n; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        clickHandler(this.innerHTML);
        clickAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {

    clickHandler(event.key);
    clickAnimation(event.key);
});

function clickHandler(drumLetter)
{
    var lettersArray = ["a", "w", "s", "d", "j", "k", "l"];
    if (lettersArray.includes(drumLetter))
    {
        let audio = new Audio("sounds/" + drumLetter + ".mp3");
        audio.play();
    }
}

function clickAnimation(drumLetter)
{
    let activeButton = document.querySelector("." + drumLetter);
    activeButton.classList.add("pressed");

    setTimeout(function() { activeButton.classList.remove("pressed")}, 120);
}





