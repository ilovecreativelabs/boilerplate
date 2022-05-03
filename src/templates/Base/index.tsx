import { Container, Footer, Header } from 'components'

import * as S from './styles'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Container>
      <Header />
    </Container>

    <S.ContentWrapper>{children}</S.ContentWrapper>

    <S.FooterWrapper>
      <Container>
        <Footer />
      </Container>
    </S.FooterWrapper>
  </S.Wrapper>
)

export default Base
