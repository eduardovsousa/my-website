import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--color-primary);
  text-align: center;
  padding: 3rem 0;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg);
  }

  .permalinks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  .footer-logo {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block;
  }

  .footer-social {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;

    a {
      background: var(--color-bg);
      color: var(--color-white);
      padding: 0.8rem;
      border-radius: 0.7rem;
      display: flex;
      border: 1px solid transparent;
    }

    a:hover {
      background: transparent;
      color: var(--color-bg);
      border-color: var(--color-bg);
    }

    @media screen and (max-width: 600px) {
      margin-bottom: 2.6rem;
    }
  }

  .footer-copyright {
    margin-bottom: 4rem;
    color: var(--color-bg);
  }
`;
