import React, { useRef, useState } from 'react';
import { Container, PortfolioContainer, PortfolioItem, PortfolioItemImage, Section } from './styles';
import IMG1 from '../../assets/images/portfolio1.png';
import IMG2 from '../../assets/images/portfolio2.png';
import IMG3 from '../../assets/images/portfolio3.png';
import IMG4 from '../../assets/images/portfolio4.png';
import IMG5 from '../../assets/images/portfolio5.png';
import IMG6 from '../../assets/images/portfolio6.jpg';
import IMG7 from '../../assets/images/portfolio7.png';
import IMG8 from '../../assets/images/portfolio8.png';
import IMG9 from '../../assets/images/portfolio9.png';
import IMG10 from '../../assets/images/portfolio10.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Clone Evernote',
    github: 'https://github.com/eduardovsousa/JavascriptNotesClient',
    demo: 'No'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Clone SpaceX',
    github: 'https://github.com/eduardovsousa/Clone-SpaceX',
    demo: 'https://clone-spacex-by-evs.netlify.app/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Design System',
    github: 'https://github.com/eduardovsousa/ignite-lab-design-system',
    demo: 'No'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Gesture Controller',
    github: 'https://github.com/eduardovsousa/gesture-controller',
    demo: 'https://eduardovsousa.github.io/gesture-controller/pages/titles/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'My Contacts',
    github: 'https://github.com/eduardovsousa/MyContacts-frontend',
    demo: 'No'
  },
  {
    id: 6,
    image: IMG6,
    title: 'NLW eSports',
    github: 'https://github.com/eduardovsousa/NLW-eSports-Ignite',
    demo: 'No'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Notifications Microservice + Kafka',
    github: 'https://github.com/eduardovsousa/notifications-microservice',
    demo: 'No'
  },
  {
    id: 8,
    image: IMG8,
    title: 'OneBitFlix',
    github: 'https://github.com/eduardovsousa/onebitflix_front-end_main',
    demo: 'No'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Sonic Toys E-commerce',
    github: 'No',
    demo: 'https://sonictoys.com.br/'
  },
  {
    id: 10,
    image: IMG10,
    title: 'WaiterApp',
    github: 'https://github.com/eduardovsousa/WaiterApp',
    demo: 'No'
  },
];


export function Portfolio() {
  // const [disabled, setDisabled] = useState(false);

  // function handleButton() {
  //   const disabledButton = disabled;
  //   setDisabled(disabledButton);
  // }

  const btnGithub = useRef(null);
  const btnDemo = useRef(null);

  const filterDemo = data.filter((demo) => demo.demo == 'No');
  console.log({ filterDemo });
  const filterGithub = data.filter((demo) => demo.github == 'No');
  console.log({ filterGithub });




  return (
    <Container id='portfolio' className='container'>
      <Section>
        <h5>Projetos recentes</h5>
        <h2>Portfolio</h2>

        <PortfolioContainer>

          {
            data.map(({id, image, title, github, demo}) => {
              return(
                <PortfolioItem key={id}>
                  <PortfolioItemImage>
                    <img src={image} alt={title} />
                  </PortfolioItemImage>
                  <h3>{title}</h3>
                  <div className="item-cta">
                    {/* Criar um component */}
                    <a href={github} target='_blank' className='btn' rel="noreferrer" ref={btnGithub}>Github</a>
                    {/* Criar um component */}
                    <a href={demo} target='_blank' className='btn btn-primary' rel="noreferrer" ref={btnDemo}>Live Demo</a>
                  </div>
                </PortfolioItem>
              );
            })
          }

        </PortfolioContainer>
      </Section>
    </Container>
  );
}
