import { IAbstractProductA } from "./productA";

export interface IAbstractProductB {
    usefulFunctionB(): string;
    anotherUserfulFunctionB(collaborator: IAbstractProductA): string;
}

export class ConcreteProductB1 implements IAbstractProductB {
    public usefulFunctionB(): string {
        return "The result of product B1";
    }

    public anotherUserfulFunctionB(collaborator: IAbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

export class ConcreteProductB2 implements IAbstractProductB {
    public usefulFunctionB(): string {
        return "The result of product B2";
    }

    public anotherUserfulFunctionB(collaborator: IAbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}
