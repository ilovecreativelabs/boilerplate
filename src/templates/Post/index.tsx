import { Newslatter } from 'components'
import { Base } from 'templates'

import * as S from './styles'

const Post = () => (
  <Base>
    <S.Wrapper>
      <h1>Blog</h1>
    </S.Wrapper>
    <Newslatter />
  </Base>
)

export default Post
