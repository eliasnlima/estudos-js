function formatPerson(value, pessoa) {
    if (value > 1) {
        pessoa.innerHTML = value + " Pessoas"  
    } else {
        pessoa.innerHTML = value + " Pessoa"
    } return pessoa
}

function formatMoney(value) {
    value = "R$" + value.toFixed(2).replace(".", ",")
    return value
}

function update() {
    let bill = Number(document.getElementById("yourBill").value)
    let tipPercent = document.getElementById("tipInput").value
    let split = document.getElementById("splitInput").value 

    let percent = document.getElementById("tipPercent").innerHTML = tipPercent + "%"
    let splitPerson = document.getElementById("splitValue")
    splitPerson = formatPerson(split, splitPerson)

    let totalSpan = document.getElementById("totalWithTip")
    let tipSpan = document.getElementById("tipValue")
    let billEachSpan = document.getElementById("billEach")

    let tipValue = (bill * tipPercent / 100)
    tipSpan = tipSpan.innerHTML = formatMoney(tipValue)

    let total = tipValue + bill
    totalSpan = totalSpan.innerHTML = formatMoney(total)
    let billEach = total / split
    billEachSpan= billEachSpan.innerHTML = formatMoney(billEach)
    
   

}