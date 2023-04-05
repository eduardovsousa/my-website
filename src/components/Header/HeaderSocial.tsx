import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HeaderSocialContent } from './styles';

export function HeaderSocial() {
  return (
    <HeaderSocialContent>
      <a href="https://www.linkedin.com/in/eduardovsousa/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/eduardovsousa" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="mailto:eduardovsousadeveloper@outlook.com?subject=Contato para dúvidas&body=Escreva sua mensagem aqui 🙋‍♂️" target="_blank" rel="noreferrer" ><MdEmail /></a>
    </HeaderSocialContent>
  );
}
