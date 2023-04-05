import CV from '../../assets/cv/CV.pdf';
import { CTAContent } from './styles';

export function CTA() {
  return (
    <CTAContent >
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Contato</a>
    </CTAContent>
  );
}
