import styled from 'styled-components';

export const Container = styled.section`

`;
export const Section = styled.section`
  margin-top: 8rem;
`;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  :hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }

  h3 {
    margin: 1.2rem 0 2rem;
  }

  .item-cta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  button {
    color: var(--color-primary);
    transition: var(--transition);
  }

  button:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
    }
`;

export const PortfolioItemImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;

  > img {
    width: 100%;
    height: 200px;
  }
`;
