import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type ButtonStyledProps = {
  hasIcon: boolean
} & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal' | 'backgroundColor' | 'color'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${theme.colors.primary};
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
  large: (theme: DefaultTheme) => css`
    height: 6rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  white: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
  `,
  red: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
  `
}

export const Wrapper = styled.button<ButtonStyledProps>`
  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    minimal,
    disabled,
    backgroundColor,
    color
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors[color!]};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${!!backgroundColor && wrapperModifiers[backgroundColor](theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
