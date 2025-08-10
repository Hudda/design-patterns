import { IComponent } from "./IComponent";

class Decorator implements IComponent {
    protected component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

export class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

export class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}
