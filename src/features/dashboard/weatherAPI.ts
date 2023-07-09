import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { formatToLocalTime } from "../../helpers"

export type GetWeatherApiArg = {
  lat: number
  lon: number
  metric?: "metric" | "imperial"
}

const formatCurrentWeather = (data: any) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data
  const { main: details, icon } = weather[0]

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    sunrise,
    sunset,
    details,
    icon,
    country,
    speed,
  }
}

export const formatForeCastWeather = (data: any) => {
  let { timezone, daily, hourly } = data
  daily = daily
    .slice(1, 6)
    .map(
      (d: { dt: number; temp: { day: number }; weather: { icon: any }[] }) => {
        return {
          title: formatToLocalTime(d.dt, timezone, "ccc"),
          temp: d?.temp.day,
          icon: d?.weather[0].icon,
        }
      },
    )
  hourly = hourly
    .slice(1, 6)
    .map((d: { dt: number; temp: { day: any }; weather: { icon: any }[] }) => {
      return {
        title: formatToLocalTime(d?.dt, timezone, "hh:mm a"),
        temp: d.temp.day,
        icon: d?.weather?.[0].icon,
      }
    })
  return { timezone, daily, hourly }
}

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getWeather: builder.query<any, GetWeatherApiArg>({
      query: (queryArg) => ({
        url: `/weather`,
        params: {
          lat: queryArg.lat,
          lon: queryArg.lon,
          units: queryArg.metric || "metric",
          appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        },
      }),
      transformResponse: (response: any) => {
        // format your response here
        const formattedResponse = formatCurrentWeather(response)
        return formattedResponse
      },
    }),
    getHourlyWeatherData: builder.query<any, GetWeatherApiArg>({
      query: (queryArg) => ({
        url: `/onecall`,
        params: {
          lat: queryArg.lat,
          lon: queryArg.lon,
          exclude: "current,minutely,alerts",
          appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        },
      }),
      transformResponse: (response: any) => {
        // format your response here
        const formattedResponse = formatForeCastWeather(response)
        return formattedResponse
      },
    }),
  }),
})

export const { useGetWeatherQuery, useGetHourlyWeatherDataQuery } = weatherApi
