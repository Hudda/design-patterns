class CurrentConditionsDisplay : IObserver, IDisplayElement {
  private float temperature;
  private float humidity;
  private ISubject weatherData;

  public CurrentConditionsDisplay(ISubject weatherData) {
    this.weatherData = weatherData;
    weatherData.RegisterObserver(this);
  }

  public void Update(ISubject subject) {
#pragma warning disable CS8602 // Dereference of a possibly null reference.
        this.temperature = (subject as WeatherData).Temperature;
        this.humidity = (subject as WeatherData).Humidity;
#pragma warning restore CS8602 // Dereference of a possibly null reference.
    Display();
  }

  public void Display() {
    Console.WriteLine($"Temperature: {temperature} \nHumidity: {humidity}\n");
  }
}