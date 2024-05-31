class WeatherStation {
  public static void Run() {
    WeatherData weatherData = new WeatherData();

    CurrentConditionsDisplay currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

    weatherData.SetMeasurements(80, 65, 30.4F);
    weatherData.SetMeasurements(82, 70, 29.2F);
    weatherData.SetMeasurements(78, 90, 29.2F);
  } 
}