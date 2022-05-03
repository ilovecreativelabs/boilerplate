import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
    height: 60vh;
  `}
`
