class WeatherData : ISubject {
  private List<IObserver> observers;
  public float Temperature { get; set; }
  public float Humidity { get; set; }
  public float Pressure { get; set; }

  public WeatherData() {
    observers = [];
  }

  public void RegisterObserver(IObserver o) {
    observers.Add(o);
  }

  public void RemoveObserver(IObserver o) {
    if (observers.IndexOf(o) != -1) {
      observers.Remove(o);
    }
  }

  public void NotifyObservers() {
    for (int i = 0; i < observers.Count; i++) {
      IObserver observer = observers[i];
      observer.Update(this);
    }
  }

  public void MeasurementsChanged() {
    NotifyObservers();
  }

  public void SetMeasurements(float temperature, float humidity, float pressure) {
    this.Temperature = temperature;
    this.Humidity = humidity;
    this.Pressure = pressure;
    MeasurementsChanged();
  }
}