import { Accordion } from 'components'
import { AccordionProps } from 'components/Accordion'

import * as S from './styles'

type FQAProps = {
  accordionContent: AccordionProps[]
}

const FQAs = ({ accordionContent }: FQAProps) => (
  <S.Wrapper>
    {accordionContent.map((item, index) => (
      <Accordion key={index} {...item} />
    ))}
  </S.Wrapper>
)

export default FQAs
