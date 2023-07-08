import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type GetWeatherApiArg = {
  lat: number
  lon: number
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
          appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        },
      }),
    }),
  }),
})

export const { useGetWeatherQuery } = weatherApi
