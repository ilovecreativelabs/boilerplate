import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    padding: ${theme.spacings.xlarge};
  `}
`
