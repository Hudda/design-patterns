import { ConcreteComponent } from "./component";
import { ConcreteDecoratorA, ConcreteDecoratorB } from "./decorator";
import { IComponent } from "./IComponent";

export class DecoratorImplementation {
    private clientCode(component: IComponent): string {
        return `RESULT: ${component.operation()}`;
    }
    public execute(): void {
        const component = new ConcreteComponent();
        console.log(this.clientCode(component));
        console.log('\n');
        const decoratorA = new ConcreteDecoratorA(component);
        const decoratorB = new ConcreteDecoratorB(decoratorA);

        console.log(this.clientCode(decoratorB));
    }
}