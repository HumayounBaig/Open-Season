import { styled } from "styled-components"

export const FlexWrapper = styled.div<{
  flexDirection?: "row" | "column"
  flexWrap?: "wrap" | "nowrap"
  justifyContent?: string
  alignItems?: string
}>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
`
