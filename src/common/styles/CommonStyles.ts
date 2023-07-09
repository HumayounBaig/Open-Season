import { styled } from "styled-components"

export const FlexWrapper = styled.div<{
  flexDirection?: "row" | "column"
  flexWrap?: "wrap" | "nowrap"
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
`
