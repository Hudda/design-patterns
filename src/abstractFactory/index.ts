import { ConcreteFactory1, ConcreteFactory2 } from "./concreteFactory";
import { IAbstractFactory } from "./IAbstractFactory";

export class AbstractFactoryImplementation {
    private clientCode(factory: IAbstractFactory) {
        const productA = factory.createProductA();
        const productB = factory.createProductB();

        console.log(productB.usefulFunctionB());
        console.log(productB.anotherUserfulFunctionB(productA));
    }

    public execute() {
        this.clientCode(new ConcreteFactory1());

        console.log();

        this.clientCode(new ConcreteFactory2());
    }
}