import { Button, Image } from 'components'

import * as S from './styles'

export type BannerProps = {
  alt: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  image: string
}

const Banner = ({
  alt,
  buttonLabel,
  buttonLink,
  image,
  subtitle,
  title
}: BannerProps) => (
  <S.Wrapper>
    <S.TextWrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      {!!buttonLabel && (
        <S.ButtonWrapper>
          <Button size="large" backgroundColor="white" color="dark">
            <S.Link href={buttonLink} role="button" target="_blank">
              {buttonLabel}
            </S.Link>
          </Button>
        </S.ButtonWrapper>
      )}
    </S.TextWrapper>
    {!!image && (
      <S.ImageWrapper>
        <Image alt={alt} heightSize="900" image={image} widthSize="900" />
      </S.ImageWrapper>
    )}
  </S.Wrapper>
)

export default Banner
