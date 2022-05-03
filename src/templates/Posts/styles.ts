import styled, { css } from 'styled-components'

export const HeroContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
`
export const BlogContent = styled.div`
  ${({ theme }) => css`
    margin-top: -${theme.spacings.huge};
  `}
`
