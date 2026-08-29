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
        <WidgetTitle className="text-4xl">
          {weather?.temperature}&deg;
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="items-end">
        <div className="flex w-full flex-col items-end gap-1.5">
          {weather && getWeatherIcon(weather.weatherCode, "size-8")}
          <Label className="text-lg font-medium">{city || "Unknown"}</Label>
        </div>
      </WidgetContent>
    </Widget>
  );
}
