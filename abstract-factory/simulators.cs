namespace AbstractFactory {
  class Simulator {
    public static void Run() {
      PizzaStore pizzaStore = new NYPizzaStore(new NYPizzaIngredientFactory());

      pizzaStore.OrderPizza("cheese");
    }
  }
}