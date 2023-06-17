buttons = document.querySelectorAll(".btn")

const makeSound = (key) => {
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

buttons.forEach(elem => {
    elem.addEventListener("click", (e)=>{
        let btn_key = elem.innerHTML
        makeSound(btn_key)
        buttonAnimation(btn_key)
    })
});

document.addEventListener("keydown", (event)=>{
    makeSound(event.key)
    buttonAnimation(event.key)
})

const buttonAnimation = (key)=>{
    let activeButton = document.querySelector("."+key)
    activeButton.classList.add("pressed")
    setTimeout(()=>{
        activeButton.classList.remove("pressed")
    }, 100)
}
