import { styled } from "styled-components"

export const FlexWrapper = styled.div<{ flexDirection?: "row" | "column" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  flex-wrap: wrap;
  border: 1px solid;
  height: 100vh;
`
