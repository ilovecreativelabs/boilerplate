import { Container, Card } from 'components'
import { CardProps } from 'components/Card'

import * as S from './styles'

type InfoProps = {
  infoItems: CardProps[]
}

const Info = ({ infoItems }: InfoProps) => (
  <Container>
    <S.Wrapper>
      {infoItems.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </S.Wrapper>
  </Container>
)

export default Info
