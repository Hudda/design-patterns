namespace AbstractFactory {
  public interface IPizzaIngredientFactory {
    IDough CreateDough();
    ISauce CreateSauce();
    ICheese CreateCheese();
  }
}