namespace FactoryMethod
{
  class NYStyleCheesePizza : Pizza {
    public NYStyleCheesePizza() {
      Name = "NY Style Sauce and Cheese Pizza";
      dough = "Thin Crust dough";
      sauce = "Marinara Sauce";
      toppings.Add("Grated Reggiano Cheese");
    }
  }
}