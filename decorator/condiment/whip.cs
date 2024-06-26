class Whip : CondimentDecorator {
    readonly Beverage beverage;


  public Whip(Beverage beverage) {
    this.beverage = beverage;
  }

  public override string GetDescription() {
    return beverage.GetDescription() + ", " + "Whip";
  }

    public override double Cost()
    {
        return 0.10 + beverage.Cost();
    }
}