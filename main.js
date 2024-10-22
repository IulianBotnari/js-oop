class veicolo {
    marca
    anno
    colore
    porte
    carburante

    constructor(marca, anno, colore, porte, carburante) {
        this.marca = marca
        this.anno = anno
        this.colore = colore
        this.porte = porte
        this.carburante = carburante
        
    }

    informzioni(){
        return `Marca: ${this.marca}, Anno: ${this.anno}, Colore: ${this.colore}, Porte: ${this.porte}, Carburante: ${this.carburante}`
    }

    calcolaEta(){
        let date = new Date()
        return date.getFullYear() - this.anno
    }
}

const utilitaria  = new veicolo("Fiat", 2019, "Blu", "5p", "Benzina")
console.log(utilitaria);


let ageCalc = utilitaria.calcolaEta()

console.log(ageCalc);


