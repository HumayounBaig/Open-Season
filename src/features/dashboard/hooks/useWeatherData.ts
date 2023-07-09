import { useGetHourlyWeatherDataQuery, useGetWeatherQuery } from "../weatherAPI"

export const useWeatherData = (latitude: number, longitude: number) => {
	const {
		data: weatherData,
		isLoading: weatherLoading,
		isError: weatherError,
	} = useGetWeatherQuery({
		lat: latitude || 0,
		lon: longitude || 0,
	})

	const {
		data: hourlyWeatherData,
		isLoading: hourlyWeatherLoading,
		isError: hourlyWeatherError,
	} = useGetHourlyWeatherDataQuery({
		lat: latitude || 0,
		lon: longitude || 0,
	})

	return {
		data: { ...weatherData, ...hourlyWeatherData },
		isLoading: weatherLoading || hourlyWeatherLoading,
		isError: weatherError || hourlyWeatherError,
	}
}
