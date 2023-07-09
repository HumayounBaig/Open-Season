import React, { useState } from "react"
import {
  MetricButton,
  SearchBar,
  SearchContainer,
  Separator,
} from "./Search.styles"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { FlexWrapper } from "../../styles/CommonStyles"

export const Search = ({ setSearchQuery, unit, setUnit }: any) => {
  const [city, setCity] = useState("")

  const handleSearch = () => {
    if (city !== "") setSearchQuery(city)
  }

  const handleUnitsChange = (e: { currentTarget: { name: string } }) => {
    const selectedUnit = e.currentTarget.name
    if (unit !== selectedUnit) setUnit(selectedUnit)
  }

  return (
    <SearchContainer>
      <SearchBar
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="search for a city..."
      />
      <FaMagnifyingGlass onClick={handleSearch} className="search-icon" />

      <FlexWrapper>
        <MetricButton onClick={handleUnitsChange} className="metric">
          °F
        </MetricButton>
        <Separator>|</Separator>
        <MetricButton onClick={handleUnitsChange} className="imperial">
          °C
        </MetricButton>
      </FlexWrapper>
    </SearchContainer>
  )
}
