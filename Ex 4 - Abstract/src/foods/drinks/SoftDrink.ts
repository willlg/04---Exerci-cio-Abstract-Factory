import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        this.getCargo();
        console.log("Refrigerante a caminho!");
    }
    getCargo(): void {
        console.log("Refrigente embarcado!");
    }

}