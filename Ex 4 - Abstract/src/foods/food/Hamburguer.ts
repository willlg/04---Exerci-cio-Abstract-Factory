import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    startDelivery(): void {
        this.getCargo();
        console.log("Hamburguer a caminho!");
    }
    getCargo(): void {
        console.log("Hamburguer embarcado!");
    }
}