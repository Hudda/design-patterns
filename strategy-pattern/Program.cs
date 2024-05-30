class MiniDuckSimulator {
  public static void Main() {
    Duck mallard = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();

    Duck model = new ModelDuck();
    model.performFly();
    model.flyBehavior = new FlyRocketPowered();
    model.performFly();
  }
}