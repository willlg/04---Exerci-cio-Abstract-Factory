import IDrink from "../foods/drinks/interfaces/IDrink";
import Softdrink from "../foods/drinks/Softdrink";
import HotDog from "../foods/food/HotDog";
import IFood from "../foods/food/interfaces/IFood";
import IDeliveryFactory from "./IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Softdrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }

}