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

const fiat  = new veicolo("Fiat", 2019, "Blu", "5p", "Benzina")
console.log(fiat);


let ageCalc = fiat.calcolaEta()

console.log(ageCalc);



const opel  = new veicolo("Opel", 2020, "Nera", "5p", "Benzina")


let arrayVeicoli = []

arrayVeicoli.push(fiat)

arrayVeicoli.push(opel)

console.log(arrayVeicoli);


arrayVeicoli.forEach((veicoli) => {
    const porteAlimentazione = veicoli.porte + `` + veicoli.carburante
    console.log(porteAlimentazione)

})


for (let i = 0; i < arrayVeicoli.length; i++) {
    const veicoli = arrayVeicoli[i];
    
    let result = veicoli.porte + `` + veicoli.carburante

    console.log(result);
    
    
}