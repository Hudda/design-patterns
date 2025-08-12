export interface IAbstractProductA {
    usefulFunctionA(): string;
}

export class ConcreteProductA1 implements IAbstractProductA {
    public usefulFunctionA(): string {
        return "The result of product A1";
    }
}

export class ConcreteProductA2 implements IAbstractProductA {
    public usefulFunctionA(): string {
        return "The result of product A2";
    }
}
