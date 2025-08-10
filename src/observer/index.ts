import { ConcreteObserverA, ConcreteObserverB } from "./observer";
import { ConcreteSubject } from "./subject";

export class ObserverImplementation {
    static execute(): void {
        const subject = new ConcreteSubject();
        const observerA = new ConcreteObserverA();
        subject.attach(observerA);

        const observerB = new ConcreteObserverB();
        subject.attach(observerB);

        subject.someBusinessLogic();
        subject.someBusinessLogic();

        subject.detach(observerB);

        subject.someBusinessLogic();
    }
}