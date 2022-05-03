import { Hero, Blogs } from 'components'
import { BannerProps } from 'components/Banner'
import { CardProps } from 'components/CardBlog'

import { Base } from 'templates'

import * as S from './styles'

export type PostsProps = {
  blogContent: CardProps[]
  blogBanner: BannerProps[]
}

const Posts = ({ blogContent, blogBanner }: PostsProps) => (
  <Base>
    <S.HeroContent>
      <Hero heroContent={blogBanner} />
    </S.HeroContent>
    <S.BlogContent>
      <Blogs blogContent={blogContent} />
    </S.BlogContent>
  </Base>
)

export default Posts
