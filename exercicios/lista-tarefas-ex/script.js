let exercicios = []

function addEx() {
    let exNome = document.getElementById("nomeEx").value
    
    exercicios.push(exNome)

    showEx()

    console.log(exercicios)

}

function showEx() {

    document.getElementById("list").innerHTML = ""

    for (i=0; i < exercicios.length; i++){

    let exItem = document.createElement("div")
    exItem.classList.add("ex")
    document.getElementById("list").appendChild(exItem)

    let exSpan = document.createElement("span")
    exSpan.innerHTML = exercicios[i]
    exItem.appendChild(exSpan)

    let edit = document.createElement("button")
    edit.innerHTML = "Editar"
    edit.id = exercicios[i]
    exItem.appendChild(edit)
    
        edit.addEventListener("click", function() {

            document.getElementById("nomeExEdit").textContent = edit.id
        
            let rep = document.getElementById("rep").value
            let peso= document.getElementById("peso").value
            let salvar = document.getElementById("salvar")

                salvar.addEventListener("click", function() {
                    
                    document.getElementById("rep").disabled = true
                    document.getElementById("rep").style.color = "white"

                    document.getElementById("peso").disabled = true
                    document.getElementById("peso").style.color = "white"

                    let p = document.createElement("p")
                    document.getElementById("editEx").appendChild(p)

                    let span = document.createElement("span")
                    span.textContent = "Repetições:"
                    p.appendChild(span)

                    let inputRep = document.createElement("input")
                    inputRep.id = "rep"
                    span.appendChild(inputRep)

                    let span2 = document.createElement("span")
                    span2.textContent = "Peso:"
                    p.appendChild(span2)

                    let inputPeso = document.createElement("input")
                    inputRep.id = "peso"
                    span2.appendChild(inputPeso)

                    let buttonAddSerie = document.createElement("button")
                    buttonAddSerie.textContent = "Add série"
                    buttonAddSerie.id = "salvar"
                    p.appendChild(buttonAddSerie)




                })
            
        })
    
    }

}