function outcome() {

    let num1 = parseFloat(document.getElementById("num-one").value)
    let num2 = parseFloat(document.getElementById("num-two").value)
    let result = 0;

    let box1 = document.getElementById("box1")
    let box2 = document.getElementById("box2")
    let box3 = document.getElementById("box3")
    let box4 = document.getElementById("box4")

    if(!isNaN (num1) && !isNaN (num2)) {

    if (box1.checked){
        result = num1 + num2
        document.getElementById("resultArea").innerHTML = result
    } if(box2.checked){
        result = num1 - num2
        document.getElementById("resultArea").innerHTML = result
    } if(box3.checked){
        result = num1 * num2
        document.getElementById("resultArea").innerHTML = result
    } if(box4.checked){
        result = num1 / num2
        document.getElementById("resultArea").innerHTML = result
    }

    } else {
        document.getElementById("resultArea").innerHTML = "Digite um número por favor!"
    }


}
