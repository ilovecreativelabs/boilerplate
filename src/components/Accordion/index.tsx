import { Container } from 'components'

import * as S from './styles'

export type AccordionProps = {
  question: string
  response: string
}

const Accordion = ({ question, response }: AccordionProps) => (
  <Container>
    <S.Wrapper>
      <S.Question>{question}</S.Question>
      <S.Response>{response}</S.Response>
    </S.Wrapper>
  </Container>
)

export default Accordion
