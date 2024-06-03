namespace FactoryMethod {
  class NYPizzaStore : PizzaStore {
    public override Pizza CreatePizza(string type) {
      if (type == "cheese") {
        return new NYStyleCheesePizza();
      }
      return null;
    }
  }
}