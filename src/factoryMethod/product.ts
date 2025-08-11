import { IProduct } from "./IProduct";

export class ConcreteProductA implements IProduct {
    operation(): string {
        return "{Result of ConcreteProductA}";
    }
}

export class ConcreteProductB implements IProduct {
    operation(): string {
        return "{Result of ConcreteProductB}";
    }
}
