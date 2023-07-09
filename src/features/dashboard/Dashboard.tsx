import { useState } from "react"

import { useGetHourlyWeatherDataQuery, useGetWeatherQuery } from "./weatherAPI"
import useGeoLocation from "../../app/useGeolocation"
import { TailSpin } from "react-loader-spinner"
import { FlexWrapper } from "../../common/styles/CommonStyles"
import { DashboardContainer } from "./Dashboard.styles"
import { Search } from "../../common/components/Search/Search"
import { LocationInfo } from "../../common/components/LocationInfo/LocationInfo"
import { TemperatureDetails } from "../../common/components/TemperatureDetails/TemperatureDetails"
import { Forecast } from "../../common/components/Forecast/Forecast"
import { useWeatherData } from "./hooks/useWeatherData"

export function Dashboard() {
  const { latitude, longitude, error } = useGeoLocation()

  const { data, isLoading, isError } = useWeatherData(
    latitude || 0,
    longitude || 0,
  )

  console.log("data", data)
  console.log("isLoading", isLoading)
  console.log("error", error)

  if (isLoading) {
    return (
      <FlexWrapper>
        <TailSpin />
      </FlexWrapper>
    )
  }

  if (isError) {
    return (
      <FlexWrapper flexDirection="column">
        <h2>Something Went Wrong :(</h2>
        <p>try again in a bit</p>
      </FlexWrapper>
    )
  }

  return (
    <DashboardContainer>
      <Search />
      <LocationInfo />
      <TemperatureDetails />
      <Forecast title="Hourly Forecast" />
      <Forecast title="daily Forecast" />
    </DashboardContainer>
  )
}
