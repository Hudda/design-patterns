import { ConcreteCreatorA, ConcreteCreatorB, Creator } from "./creator";

export class FactoryMethodImplementation {
    private clientCode(creator: Creator) {
        console.log("I'm not aware of creator class but it still works");
        console.log(creator.someOperation());
    }

    public execute(): void {
        console.log("App launched with ConcreteCreatorA");
        this.clientCode(new ConcreteCreatorA());

        console.log("App launched with ConcreteCreatorB");
        this.clientCode(new ConcreteCreatorB());
    }
}