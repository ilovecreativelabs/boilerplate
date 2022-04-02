import styled, { css } from 'styled-components'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 5rem;

    img {
      height: 10rem;
    }

    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Esperando...'
}))`
  width: 4rem;
`

export const FormError = styled.div`
  ${({ theme }) => css`
    color: red;
    font-size: ${theme.font.sizes.small};
    text-align: center;

    svg {
      width: 1.6rem;
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.small};
    text-align: center;

    a {
      border-bottom: 0.1rem solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      transition: color, border, ${theme.transition.fast};
      text-decoration: none;
      margin-left: 0.5rem;

      &:hover {
        border-bottom: 0.1rem solid ${theme.colors.primary};
        color: ${theme.colors.primary};
      }
    }
  `}
`

export const FormSuccess = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.small};
    text-align: center;

    svg {
      color: ${theme.colors.primary};
      width: 2.4rem;
    }
  `}
`
