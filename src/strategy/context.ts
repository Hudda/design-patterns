import type {IStrategy} from "./IStrategy";

export class Context {
    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.log("Context: Sorting data using strategy.");
        const result = this.strategy.doAlgorithm(['a', 'd', 'b', 'c']);
        console.log(result);
    }
}