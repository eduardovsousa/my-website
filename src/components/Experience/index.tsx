import { Backend, Container, ContainerExperience, ExperienceContent, ExperienceDetails, Frontend, Section } from './styles';
import {BsFillPatchCheckFill} from 'react-icons/bs';

export function Experience() {
  return (
    <Container id='experience'>
      <Section>
        <h5>Skills que possuo</h5>
        <h2>Minha experiência</h2>

        <ContainerExperience>
          <Frontend>
            <h3>Front end Development</h3>
            <ExperienceContent>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>HTML</h4>
                  <small className='text-light'>Experiente</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>CSS</h4>
                  <small className='text-light'>Experiente</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>JavaScrit</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experiente</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>React Native</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>React</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </ExperienceDetails>
            </ExperienceContent>
          </Frontend>

          <Backend>
            <h3>Back end Development</h3>
            <ExperienceContent>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>NodeJs</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>MongoDB</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>PHP</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>MySQL</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>Java</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsFillPatchCheckFill className='Icon'/>
                <div className="">
                  <h4>Prisma</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </ExperienceDetails>
            </ExperienceContent>
          </Backend>
        </ContainerExperience>
      </Section>
    </Container>
  );
}
