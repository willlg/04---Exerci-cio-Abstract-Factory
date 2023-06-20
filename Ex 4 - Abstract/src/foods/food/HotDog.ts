import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    startDelivery(): void {
        this.getCargo();
        console.log("Cachorro-Quente a caminho!");
    }
    getCargo(): void {
        console.log("Cachorro-Quente embarcado!");
    }

}