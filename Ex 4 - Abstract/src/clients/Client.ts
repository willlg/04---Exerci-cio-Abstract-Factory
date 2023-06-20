import IDeliveryFactory from "../deliverys/IDeliveryFactory";
import IDrink from "../foods/drinks/interfaces/IDrink";
import IFood from "../foods/food/interfaces/IFood";

export default class Client{
    private drink: IDrink;
    private food: IFood;

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startDelivery(){
        this.drink.startDelivery();
        this.food.startDelivery();
    }
}