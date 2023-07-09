import { useGetHourlyWeatherDataQuery, useGetWeatherQuery } from "../weatherAPI"

export const useWeatherData = (
	latitude: number,
	longitude: number,
	metric: "metric" | "imperial",
) => {
	const {
		data: weatherData,
		isLoading: weatherLoading,
		isError: weatherError,
	} = useGetWeatherQuery({
		lat: latitude || 0,
		lon: longitude || 0,
		metric,
	})

	const {
		data: hourlyWeatherData,
		isLoading: hourlyWeatherLoading,
		isError: hourlyWeatherError,
	} = useGetHourlyWeatherDataQuery(
		{
			lat: latitude || 0,
			lon: longitude || 0,
			metric,
		},
		{ skip: !weatherData },
	)

	return {
		data: { ...weatherData, ...hourlyWeatherData },
		isLoading: weatherLoading || hourlyWeatherLoading,
		isError: weatherError || hourlyWeatherError,
	}
}
