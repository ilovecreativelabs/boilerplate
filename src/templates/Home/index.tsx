import { Hero, Information, Newslatter, Questions } from 'components'
import { CardProps } from 'components/Card'
import { AccordionProps } from 'components/Accordion'
import { BannerProps } from 'components/Banner'

import { Base } from 'templates'

import * as S from './styles'

export type HomeProps = {
  infoItems: CardProps[]
  accordionContent: AccordionProps[]
  heroContent: BannerProps[]
  lastContent: BannerProps[]
}

const Home = ({
  accordionContent,
  infoItems,
  heroContent,
  lastContent
}: HomeProps) => (
  <Base>
    <S.HeroContent>
      <Hero heroContent={heroContent} />
    </S.HeroContent>
    <Information infoItems={infoItems} />
    <S.HeroContent>
      <Hero heroContent={lastContent} />
    </S.HeroContent>
    <Questions accordionContent={accordionContent} />
    <Newslatter />
  </Base>
)

export default Home
