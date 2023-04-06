import { CTA } from './CTA';
import ME from '../../assets/images/me.png';
import { HeaderSocial } from './HeaderSocial';
import { Container, HeaderContainer, Content, MEContent, ScrollDown } from './styles';

export function Header() {
  return (
    <Container className='container'>
      <HeaderContainer >
        <Content >
          <h5>Olá, sou o</h5>
          <h1>Eduardo Varela</h1>
          <h5 className='text-light'>Full Stack Developer</h5>
          <CTA />
          <HeaderSocial />

          <MEContent >
            <img src={ME} alt="me" />
          </MEContent>

          <ScrollDown>
            <a href="#contact">Scroll Down</a>
          </ScrollDown>
        </Content>
      </HeaderContainer>
    </Container>
  );
}
