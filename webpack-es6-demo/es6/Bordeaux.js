class Bordeaux {
    constructor(grape, country) {
        this.grape = 'Cabernet Sauvignon';
        this.country = 'France';
    }
    toString() {
        return `(${this.grape}, ${this.country})`;
    }
}

export default Bordeaux;