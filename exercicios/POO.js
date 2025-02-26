// criar uma classe carro

function Carro(marca, modelo, ano, ligado) {

    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = ligado;

    this.ligar = function() {
  
        this.ligado = true;
      
    }

    this.desligar = function() {
        this.ligado = false;
    }

    this.informacoes = function(){
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
        console.log("Ano: " + this.ano)
        console.log("Ligado: " + this.ligado)
    }
}

let carro1 = new Carro ("Volkswagen", "Gol", 2003, false)

carro1.informacoes()
carro1.ligar()
carro1.informacoes()
carro1.desligar()
carro1.informacoes()