import { IComponent } from "./IComponent";

export class ConcreteComponent implements IComponent {
    public operation(): string {
        return "ConcreteComponent";
    }
}