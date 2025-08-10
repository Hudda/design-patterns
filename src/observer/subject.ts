import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

export class ConcreteSubject implements ISubject {
    public state: number = 0;
    private observers: IObserver[] = [];

    attach(observer: IObserver): void {
        this.observers.push(observer);
    }

    detach(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Subject: Nonexistent observer.");
        }

        this.observers.slice(observerIndex, 1);
        console.log('Subject: Detached an observer');
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    someBusinessLogic(): void {
        console.log("Subject: I'm doing something important");
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log("Subject: My state has changed to ", this.state);
        this.notify();
    }
}