import { MdEmail } from 'react-icons/md'

import { Container, Button, TextField } from 'components'
import { FormWrapper } from 'components/Form'

import * as S from './styles'

const Newslatter = () => (
  <Container>
    <S.Wrapper>
      <S.Title>Assine nossa Newslatter</S.Title>
      <S.Subtitle>
        Junta-se a milhares de leitores e receba novidades direitamente no seu
        email.
      </S.Subtitle>
      <FormWrapper>
        <S.Form role="form">
          <TextField
            type="email"
            placeholder="Informe seu email"
            name="email"
            icon={<MdEmail color="#FF2156" />}
          />
          <S.Wrap>
            <Button size="large" backgroundColor="red" color="white">
              Enviar
            </Button>
          </S.Wrap>
        </S.Form>
      </FormWrapper>
    </S.Wrapper>
  </Container>
)

export default Newslatter
