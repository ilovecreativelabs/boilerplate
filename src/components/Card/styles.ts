import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.border};
    padding: ${theme.spacings.xlarge};
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    text-align: center;
  `}
`
export const Subtitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    text-align: center;
  `}
`
