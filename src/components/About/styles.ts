import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const Container = styled.section`
  padding-top: 8rem;
`;

export const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
  display: grid;
  place-items: center;

  > img {
    width: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: var(--transition);
  }
  > img:hover {
    transform: rotate(0deg);
  }

  @media screen and (max-width: 1024px){
    width: 50%;
    margin: 2rem auto 4rem;

    > img {
      width: 16rem;
    }
  }

  @media screen and (max-width: 600px){
    width: 65%;
    margin: 0 auto 3rem;

    > img {
      width: 8rem;
    }
  }

`;

export const AboutContent = styled.div`
  > p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);
  }

  @media screen and (max-width: 1024px){
    > p {
      margin: 1rem 0 1.5rem;
    }
  }

  @media screen and (max-width: 600px){
    text-align: center;

    > p {
      margin: 1.5rem 0;
    }
  }
`;

export const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const AboutCard = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  :hover{
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  > .AboutIcon {
    color: var(--color-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  > h5 {
    font-size: .95rem;
  }

  > small {
    font-size: 0.7rem;
    color: var(--color-light);
  }

`;
