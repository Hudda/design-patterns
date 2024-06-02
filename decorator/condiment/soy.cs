class Soy : CondimentDecorator {
    readonly Beverage beverage;


  public Soy(Beverage beverage) {
    this.beverage = beverage;
  }

  public override string GetDescription() {
    return beverage.GetDescription() + ", " + "Soy";
  }

    public override double Cost()
    {
        return getCost() + beverage.Cost();
    }

  private double getCost() {
    switch (Size)
    {
      case BeverageSize.TALL:
        return 0.10;
      case BeverageSize.GRANDE:
        return 0.15;
      case BeverageSize.VENTI:
        return 0.20;
      default:
        return 0.20;
    }
  }
}