import { Container, CardBlog } from 'components'
import { CardProps } from 'components/CardBlog'

import * as S from './styles'

type BlogsProps = {
  blogContent: CardProps[]
}

const Blogs = ({ blogContent }: BlogsProps) => (
  <Container>
    <S.Wrapper>
      {blogContent.map((item, index) => (
        <CardBlog key={index} {...item} />
      ))}
    </S.Wrapper>
  </Container>
)

export default Blogs
