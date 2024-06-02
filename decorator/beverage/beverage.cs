abstract class Beverage {
  public string description = "Unknown Beverage";
  public BeverageSize Size { get; set; }

  public virtual string GetDescription() {
    return description;
  }
  public abstract double Cost();
}