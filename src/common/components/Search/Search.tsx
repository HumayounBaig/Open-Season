import React, { useState } from "react"
import {
  Logo,
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
      <Logo>Open Season</Logo>
      <SearchBar
        value={city}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setCity(e.target.value)
        }
        type="text"
        placeholder="search for a city..."
      />
      <FaMagnifyingGlass onClick={handleSearch} className="search-icon" />

      <FlexWrapper>
        <MetricButton onClick={handleUnitsChange} name="imperial">
          °F
        </MetricButton>
        <Separator>|</Separator>
        <MetricButton onClick={handleUnitsChange} name="metric">
          °C
        </MetricButton>
      </FlexWrapper>
    </SearchContainer>
  )
}
