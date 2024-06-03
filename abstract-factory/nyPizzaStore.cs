namespace AbstractFactory {
  class NYPizzaStore : PizzaStore {
    IPizzaIngredientFactory pizzaIngredientFactory;

    public NYPizzaStore(IPizzaIngredientFactory pizzaIngredientFactory) {
      this.pizzaIngredientFactory = pizzaIngredientFactory;
    }
    public override Pizza CreatePizza(string type) {
      if (type == "cheese") {
        return new CheesePizza(pizzaIngredientFactory);
      }
      return null;
    }
  }
}