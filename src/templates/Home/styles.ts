import styled, { css } from 'styled-components'

export const HeroContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
`
