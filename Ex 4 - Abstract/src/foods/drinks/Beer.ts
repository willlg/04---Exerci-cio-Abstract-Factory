import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        this.getCargo();
        console.log("Cerveja a Caminho!");
    }
    getCargo(): void {
        console.log("Cerveja Embarcada!");
    }

}