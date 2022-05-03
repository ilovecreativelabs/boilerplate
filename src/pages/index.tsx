import Home, { HomeProps } from 'templates/Home'

import { initialMock, lastMock } from 'components/Hero/mock'
import infoMock from 'components/Info/mock'
import questionMock from 'components/FQAs/mock'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      infoItems: infoMock,
      accordionContent: questionMock,
      heroContent: initialMock,
      lastContent: lastMock
    }
  }
}
