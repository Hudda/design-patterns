import type { IStrategy } from './IStrategy';

export class ConcreteStrategyA implements IStrategy {
    doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

export class ConcreteStrategyB implements IStrategy {
    doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}