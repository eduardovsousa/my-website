import { Container } from './styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const evs = '<Evs />';

  return (
    <Container>
      <a href="#" className='footer-logo'>{evs}</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Hoje</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer-social">
        <a href="https://github.com/eduardovsousa" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/eduardovsousa/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; {evs} - Todos os direitos reservados.</small>
      </div>
    </Container>
  );
}
