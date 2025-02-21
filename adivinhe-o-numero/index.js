let computerNumber = undefined;
let userNumber = undefined;
let trying = []
let tent = 0
let maxTent = 10;
let msgTent = "Você tem " + maxTent + " tentativas restantes"

let venceu = undefined;



function init() {

    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
    document.getElementById("tentativas").innerHTML = maxTent + " tentativas restantes"
    
    
}


document.getElementById("inputBox").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  

        if (venceu == true){
            document.getElementById("textOutput").textContent = "Você já ganhou! Inicie um novo jogo!"
            document.getElementById("inputBox").setAttribute("Readonly", "Readonly")

        } else if (maxTent < 1) {
            document.getElementById("tentativas").innerHTML = "Você perdeu! Inicie um novo jogo!"
            document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
        }
        
        else {
            guess()
            confTent()
            
        }
       
       
     }
})

function guess() {

    userNumber = document.getElementById("inputBox").value

    if (userNumber == computerNumber){
        tent++
        maxTent--
        document.getElementById("textOutput").textContent = "Resposta certa: " + computerNumber
         document.getElementById("tentativas").innerHTML = "VOCÊ GANHOU!"
        console.log("igual")
        trying.push(userNumber)
        venceu = true;
        document.getElementById("inputBox").setAttribute("Readonly", "Readonly")

    } else if (computerNumber > userNumber){
        
        document.getElementById("textOutput").textContent = "Maior"
        console.log("maior")
        trying.push(userNumber)
        tent++
        maxTent-- 
        document.getElementById("tentativas").innerHTML = maxTent + " tentativas restantes"

    } else if (computerNumber < userNumber) {
        document.getElementById("textOutput").textContent = "Menor"
         console.log("menor")
         trying.push(userNumber)
        tent++
        maxTent--
        document.getElementById("tentativas").innerHTML = maxTent + " tentativas restantes"

    }
        
    

    document.getElementById("inputBox").value = ""
    let attempts = document.getElementById("attempts").innerHTML = tent
    let lista = document.getElementById("guesses").innerHTML = trying


    console.log("numero pc: " + computerNumber)
    console.log("numero usuario " + userNumber)
    console.log("lista de tentativas " + trying)
    console.log("numero de tentativas " + tent)
    
}

function novoJogo() {

   window.location.reload()    

}

function confTent() {

    if (maxTent < 1 ) {
        document.getElementById("textOutput").textContent = "Você acabou com seu número de tentativas!"
        document.getElementById("tentativas").innerHTML = "Você perdeu! Número correto " + computerNumber 
        document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
        maxTent = 0

    } 

    
}






      




    
    


