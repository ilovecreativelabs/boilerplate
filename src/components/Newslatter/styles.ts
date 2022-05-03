import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: ${theme.spacings.xxlarge};
  `}
`
export const Form = styled.form`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
export const Subtitle = styled.h5`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    line-height: 1.5;
  `}
`
export const Wrap = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
  `}
`
