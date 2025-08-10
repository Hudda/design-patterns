import { Context } from "./context";
import { ConcreteStrategyA, ConcreteStrategyB } from "./strategy";

export class StrategyImplementation {
    static execute(): void {
        const context = new Context(new ConcreteStrategyA());
        context.doSomeBusinessLogic();

        context.setStrategy(new ConcreteStrategyB());
        context.doSomeBusinessLogic();
    }
}