import * as S from './styles'

export type CardProps = {
  title: string
  subtitle: string
}

const Card = ({ subtitle, title }: CardProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Wrapper>
)

export default Card
