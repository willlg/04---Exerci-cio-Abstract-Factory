import Client from "./clients/Client";
import IAiqfomeDelivery from "./deliverys/IAiqfomeDelivery";
import IDeliveryFactory from "./deliverys/IDeliveryFactory";
import IFoodDelivery from "./deliverys/IFoodDelivery";
import Company from "./foods/consts/Company";

const currentcompany = Company.AIQFOMEDELIVERY;
let factory! : IDeliveryFactory;

switch(currentcompany){
    case Company.AIQFOMEDELIVERY:
        factory = new IAiqfomeDelivery();
        break;
    case Company.IFOODDELIVERY:
        factory = new IFoodDelivery();
        break;
    default:
        console.log("Delivery não definido!");
}

const client = new Client(factory);
client.startDelivery();