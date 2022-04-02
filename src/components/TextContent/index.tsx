import * as S from './styles'

export type TextContentProps = {
  content: string
}

const TextContent = ({ content }: TextContentProps) => (
  <S.Wrapper>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
