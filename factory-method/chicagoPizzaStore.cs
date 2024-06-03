namespace FactoryMethod {
  class ChicagoPizzaStore : PizzaStore {
    public override Pizza CreatePizza(string type) {
      if (type == "cheese") {
        return new ChicagoStyleCheesePizza();
      }
      return null;
    }
  }
}