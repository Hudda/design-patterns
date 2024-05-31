abstract class Duck {
  public FlyBehavior flyBehavior {get; set;} = null!;
  public QuackBehavior quackBehavior {get; set;} = null!;

  public Duck() {}

  public abstract void display();

  public void performFly() {
    this.flyBehavior.fly();
  }

  public void performQuack() {
    this.quackBehavior.quack();
  }
}