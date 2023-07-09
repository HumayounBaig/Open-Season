import React from "react"
import {
  MetricButton,
  SearchBar,
  SearchContainer,
  Separator,
} from "./Search.styles"
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6"
import { FlexWrapper } from "../../styles/CommonStyles"

export const Search = () => {
  return (
    <SearchContainer>
      <SearchBar type="text" placeholder="search for a city..." />
      <FaLocationDot className="search-icon" />
      <FaMagnifyingGlass className="search-icon" />

      <FlexWrapper>
        <MetricButton className="metric">°F</MetricButton>
        <Separator>|</Separator>
        <MetricButton className="imperial">°C</MetricButton>
      </FlexWrapper>
    </SearchContainer>
  )
}
