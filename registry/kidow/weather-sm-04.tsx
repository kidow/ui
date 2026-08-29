import {
  DEFAULT_LOCATION,
  useLocation,
} from "@/components/kidow/use-location";
import { useWeather } from "@/components/kidow/use-weather";
import { getWeatherDescription } from "@/components/kidow/weather-utils";
import { Label } from "@/components/ui/label";
import { Widget, WidgetContent } from "@/components/kidow/widget";

export default function WidgetDemo() {
  const { coordinates, isLoading: isLoadingLocation } = useLocation();
  const { data: weather, isLoading: isLoadingWeather } = useWeather(
    coordinates?.lat ?? DEFAULT_LOCATION.lat,
    coordinates?.lon ?? DEFAULT_LOCATION.lon,
  );

  const isLoading = isLoadingLocation || isLoadingWeather;

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  if (isLoading) {
    return (
      <Widget>
        <WidgetContent className="mx-auto flex-col items-center justify-center">
          <Label className="animate-pulse">Loading...</Label>
        </WidgetContent>
      </Widget>
    );
  }

  return (
    <Widget>
      <WidgetContent className="mx-auto flex-col items-start">
        <Label className="text-6xl">{weather?.temperature}&deg;</Label>
        <Label className="text-2xl">
          {weather ? getWeatherDescription(weather.weatherCode) : "Sunny"}
        </Label>
        <Label>{currentDate}</Label>
      </WidgetContent>
    </Widget>
  );
}
