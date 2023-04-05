import styled from 'styled-components';

export const Container = styled.section`

`;
export const Section = styled.section`
   margin-top: 8rem;
`;

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
    gap: 1.5rem;
}
`;

export const Service = styled.article`
  background: var(--color-bg-variant);
  border-radius: 0 0 2rem 2rem;
  border: 1px solid var(--color-primary);
  height: fit-content;
  transition: var(--transition);

  :hover {
    background: transparent;
    border-color: var(--color-bg-variant);
    cursor: default;
  }

  @media screen and (max-width: 1024px){
    height: auto;
}
`;

export const ServiceHead = styled.div`
  background:var(--color-primary);
  padding: 2rem;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--color-bg);
    font-size: 1rem;
    text-align: center;
  }
`;

export const ServiceList = styled.div`
  padding: 2rem;

  li {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.8rem;
  }

  .service_list-icon {
    color: var(--color-primary);
    margin-top: 2rem;
  }

  p {
    font-size: 0.9rem;
  }
`;

