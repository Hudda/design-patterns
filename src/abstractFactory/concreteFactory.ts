import { IAbstractFactory } from "./IAbstractFactory";
import { ConcreteProductA1, ConcreteProductA2, IAbstractProductA } from "./productA";
import { ConcreteProductB1, ConcreteProductB2, IAbstractProductB } from "./productB";

export class ConcreteFactory1 implements IAbstractFactory {
    public createProductA(): IAbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): IAbstractProductB {
        return new ConcreteProductB1();
    }
}

export class ConcreteFactory2 implements IAbstractFactory {
    public createProductA(): IAbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): IAbstractProductB {
        return new ConcreteProductB2();
    }
}
