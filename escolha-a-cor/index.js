let colors = ["Red", "Blue", "Yellow", "Purple", "Black", "Green"]
let btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    let randomColor = getRandomNumbers()
    document.body.style.background = colors[randomColor]
    document.querySelector(".color").innerHTML = colors[randomColor]
    console.log(randomColor)
   
   
})

function getRandomNumbers() {
    return Math.floor(Math.random() * colors.length)

}
 


