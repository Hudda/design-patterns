namespace AbstractFactory
{
  abstract class Pizza {
    public string Name {get; set;} = null!;
    protected IDough dough = null!;
    protected ISauce sauce = null!;
    protected ICheese cheese = null!;

    abstract public void Prepare();

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