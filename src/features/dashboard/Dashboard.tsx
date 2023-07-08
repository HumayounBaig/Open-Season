import { useState } from "react"

import { useGetWeatherQuery } from "./weatherAPI"
import useGeoLocation from "../../app/useGeolocation"
import { TailSpin } from "react-loader-spinner"
import { FlexWrapper } from "../../common/styles/CommonStyles"

export function Dashboard() {
  const { latitude, longitude, error } = useGeoLocation()

  const { data, isLoading, isError } = useGetWeatherQuery({
    lat: latitude || 0,
    lon: longitude || 0,
  })
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

  return <div></div>
}
