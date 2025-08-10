import { ISubject } from "./ISubject";
import { ConcreteSubject } from "./subject";

export class ConcreteObserverA {
    public update(subject: ISubject) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event');
        }
    }
}

export class ConcreteObserverB {
    public update(subject: ISubject) {
        if (subject instanceof ConcreteSubject && (subject.state == 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event');
        }
    }
}