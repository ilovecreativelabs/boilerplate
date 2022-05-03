import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
  `}
`
export const ImageWrapper = styled.div`
  ${() => css``}
`
export const TextWrapper = styled.div`
  ${() => css``}
`
export const ButtonWrapper = styled.div`
  ${() => css``}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    line-height: 1.2;
    text-transform: uppercase;
    width: 70%;
  `}
`
export const Subtitle = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.lightWhite};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};
    width: 70%;
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    text-decoration: none;
  `}
`
