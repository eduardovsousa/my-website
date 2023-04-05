import {
  AboutCard,
  AboutCards,
  AboutContent,
  AboutMe,
  Container,
  Section,
} from './styles';
import ME from '../../assets/images/meFace.png';
import { FaAward } from 'react-icons/fa';
import { BsPersonWorkspace } from 'react-icons/bs';
import { VscFolderLibrary } from 'react-icons/vsc';

export function About() {
  return (
    <>
      <Container id="about" className="container">
        <h5>Conheça mais</h5>
        <h2>Sobre mim</h2>
        <Section>
          <AboutMe>
            <img src={ME} alt="About image" />
          </AboutMe>

          <AboutContent>
            <AboutCards>
              <AboutCard>
                <FaAward className="AboutIcon" />
                <h5>Experiência</h5>
                <small>Mais de 3 anos estudando programação</small>
              </AboutCard>

              <AboutCard>
                <BsPersonWorkspace className="AboutIcon" />
                <h5>Trabalho</h5>
                <small>Atualmente atuo como full stack developer</small>
              </AboutCard>

              <AboutCard>
                <VscFolderLibrary className="AboutIcon" />
                <h5>Projetos</h5>
                <small>10+ projetos completos de diversas complexidades</small>
              </AboutCard>
            </AboutCards>
            <p>
              Estudo programação desde 2020, tenho me especializado em
              desenvolvimento full stack para aplicações web com as techs de
              JavaScript (React, Node.js e TypeScript). Porém, com mais
              familiaridade com o front end. Por estar em constante evolução dos
              meus conhecimentos, além do foco em plataformas web, busco ampliar
              a experiência em desenvolvimento com apps híbridos (React Native).
              Enquanto estou no período de graduação, realizo projetos para
              sancionar problemas reais para empresas parceiras da instituição.
            </p>

            <a href="#contact" className="btn btn-primary">
              Vamos conversar
            </a>
          </AboutContent>
        </Section>
      </Container>
    </>
  );
}
