import Link from 'next/link'

import { Image } from 'components'

import * as S from './styles'

export type CardProps = {
  title: string
  image: string
  shortDescription: string
  longDescription: string
  slug: string
  createdAt: string
  alt: string
}

const CardBlog = ({
  alt,
  createdAt,
  image,
  shortDescription,
  slug,
  title
}: CardProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image alt={alt} heightSize="200" image={image} widthSize="200" />
    </S.ImageWrapper>
    <Link href={`/post/${slug}`} passHref>
      <a>
        <S.Wrap>
          <S.Title>{title}</S.Title>
          <S.CreatedAt>{createdAt}</S.CreatedAt>
        </S.Wrap>
        <S.Description>{shortDescription}</S.Description>
      </a>
    </Link>
  </S.Wrapper>
)

export default CardBlog
