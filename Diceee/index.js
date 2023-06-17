img1 = document.querySelector(".img1")
img2 = document.querySelector(".img2")
refresh = document.querySelector("h1")

dice1 = Math.ceil(Math.random()*6)
dice2 = Math.ceil(Math.random()*6)

img1.src = `./images/dice${dice1}.png`
img2.src = `./images/dice${dice2}.png`

if (dice1>dice2){
    refresh.textContent = "Player 1 Wins"
}
else if(dice1<dice2){
    refresh.textContent = "Player 2 Wins"
}
else{
    refresh.textContent = "Draw"
}
