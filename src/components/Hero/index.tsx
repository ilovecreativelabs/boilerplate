import { Container, Banner } from 'components'
import { BannerProps } from 'components/Banner'

type HeroProps = {
  heroContent: BannerProps[]
}

const Hero = ({ heroContent }: HeroProps) => (
  <Container>
    {heroContent.map((item, index) => (
      <Banner key={index} {...item} />
    ))}
  </Container>
)

export default Hero
