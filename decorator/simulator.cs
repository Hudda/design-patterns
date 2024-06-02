class StarbuzzCoffeeSimulator {
  public static void Run() {
    Beverage beverage = new Espresso();
    Console.WriteLine($"{beverage.GetDescription()} ${beverage.Cost()}");

    Beverage beverage2 = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    beverage2 = new Soy(beverage2)
    {
      Size = BeverageSize.VENTI
    };
    Console.WriteLine($"{beverage2.GetDescription()} ${beverage2.Cost()}");

    Beverage beverage3 = new HouseBlend();
    beverage3 = new Soy(beverage3)
    {
      Size = BeverageSize.GRANDE
    };
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    Console.WriteLine($"{beverage3.GetDescription()} ${beverage3.Cost()}");
  }
}