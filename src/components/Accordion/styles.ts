import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css``}
`
export const Question = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
  `}
`
export const Response = styled.p`
  ${() => css``}
`
