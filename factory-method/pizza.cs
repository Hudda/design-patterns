namespace FactoryMethod
{
  abstract class Pizza {
    public string Name {get; set;} = null!;
    protected string dough = null!;
    protected string sauce = null!;
    protected List<string> toppings = [];

    public void Prepare() {
      Console.WriteLine($"Preparing {Name}");
      Console.WriteLine($"Tossing dough...");
      Console.WriteLine($"Adding sauce...");
      Console.WriteLine($"Adding toppings: ");
      for (int i = 0; i < toppings.Count; i++) {
        Console.WriteLine($"    {toppings[i]}");
      }
    }

    public void Bake() {
      Console.WriteLine("Bake for 25 minutes at 350");
    }

    public virtual void Cut() {
      Console.WriteLine("Cutting the pizza in diagonal slices");
    }

    public void Box() {
      Console.WriteLine("Place pizza in offical PizzaStore box");
    }
  }
}