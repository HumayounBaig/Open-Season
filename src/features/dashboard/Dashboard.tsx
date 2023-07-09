import { useState } from "react"

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
  const [searchQuery, setSearchQuery] = useState("")
  const [unit, setUnit] = useState<"metric" | "imperial">("metric")

  const { latitude, longitude, error } = useGeoLocation()
  const {
    data: weather,
    isLoading,
    isError,
  } = useWeatherData(latitude || 0, longitude || 0, unit)

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
      <Search searchQuery setSearchQuery unit={unit} setUnit={setUnit} />
      <LocationInfo weather={weather} />
      <TemperatureDetails weather={weather} />
      <Forecast items={weather.hourly} title="Hourly Forecast" />
      <Forecast items={weather.daily} title="daily Forecast" />
    </DashboardContainer>
  )
}
