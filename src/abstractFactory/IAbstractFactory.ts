import { IAbstractProductA } from "./productA";
import { IAbstractProductB } from "./productB";

export interface IAbstractFactory {
    createProductA(): IAbstractProductA;
    createProductB(): IAbstractProductB;
}