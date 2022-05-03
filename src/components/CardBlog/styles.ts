import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
  `}
`
export const ImageWrapper = styled.div`
  ${() => css``}
`
export const Wrap = styled.div`
  ${() => css``}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    line-height: 1.2;
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    line-height: 1.2;
  `}
`
export const CreatedAt = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
