import Beer from "../foods/drinks/Beer";
import IDrink from "../foods/drinks/interfaces/IDrink";
import Hamburguer from "../foods/food/Hamburguer";
import IFood from "../foods/food/interfaces/IFood";
import IDeliveryFactory from "./IDeliveryFactory";

export default class IAiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }

}