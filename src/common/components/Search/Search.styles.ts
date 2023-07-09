import { styled } from "styled-components"

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * + * {
    margin-left: 16px;
  }
  .search-icon {
    color: white;
    cursor: pointer;
  }
`
export const SearchBar = styled.input`
  font-size: 20px;
  font-weight: 300;
  padding: 0.5rem;
  width: 100%;
  outline: none;
  text-transform: capitalize;

  &:focus {
    outline: none;
  }

  &::placeholder {
    text-transform: lowercase;
  }
`
export const MetricButton = styled.button`
  background: transparent;
  font-size: 20px;
  border: none;
  color: white;
`

export const Separator = styled.p`
  font-size: 20px;
  color: white;
  margin-inline: 4px;
  padding-bottom: 4px;
`

export const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-family: fantasy;
  text-align: left;
  user-select: none;
`
