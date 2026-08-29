import {
  DEFAULT_LOCATION,
  useLocation,
} from "@/components/kidow/use-location";
import { useWeather } from "@/components/kidow/use-weather";
import { getWeatherIcon } from "@/components/kidow/weather-utils";
import { Label } from "@/components/ui/label";
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "@/components/kidow/widget";

export default function WidgetDemo() {
  const { coordinates, city, isLoading: isLoadingLocation } = useLocation();
  const { data: weather, isLoading: isLoadingWeather } = useWeather(
    coordinates?.lat ?? DEFAULT_LOCATION.lat,
    coordinates?.lon ?? DEFAULT_LOCATION.lon,
  );

  const isLoading = isLoadingLocation || isLoadingWeather;

  if (isLoading) {
    return (
      <Widget>
        <WidgetContent className="flex items-center justify-center">
          <Label className="animate-pulse">Loading...</Label>
        </WidgetContent>
      </Widget>
    );
  }

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>{city || "Unknown"}</WidgetTitle>
        {weather && getWeatherIcon(weather.weatherCode, "size-5")}
      </WidgetHeader>
      <WidgetContent>
        <Label className="text-5xl">{weather?.temperature}&deg;</Label>
      </WidgetContent>
    </Widget>
  );
}
