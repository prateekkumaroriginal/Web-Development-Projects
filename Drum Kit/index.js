keys = document.querySelectorAll(".btn");

keys.forEach(elem => {
    elem.addEventListener("click", () => {
        alert("I got clicked")
    })
});

