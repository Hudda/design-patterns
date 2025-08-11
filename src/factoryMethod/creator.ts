import { IProduct } from "./IProduct";
import { ConcreteProductA, ConcreteProductB } from "./product";

export abstract class Creator {
    public abstract factoryMethod(): IProduct;

    public someOperation(): string {
        const product = this.factoryMethod();

        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

export class ConcreteCreatorA extends Creator {
    public factoryMethod(): IProduct {
        return new ConcreteProductA();
    }
}

export class ConcreteCreatorB extends Creator {
    public factoryMethod(): IProduct {
        return new ConcreteProductB();
    }
}
