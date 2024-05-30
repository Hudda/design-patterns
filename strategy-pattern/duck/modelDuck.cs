class ModelDuck : Duck {
  public ModelDuck() {
    quackBehavior = new Quack();
    flyBehavior = new FlyNoWay();
  }

  public override void display() {
    Console.WriteLine("I'm a model duck");
  }
}