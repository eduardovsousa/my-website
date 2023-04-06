import styled from 'styled-components';

export const Container = styled.section``;

export const HeaderContainer = styled.header`
  height: 100vh;
  padding-top: 7rem;
  width: var(--container-width-lg);
  margin: 0 auto;

  @media screen and (max-width: 1024px){
    height: 68vh;
  }

  @media screen and (max-width: 600px){
    height: 100vh;
    padding-top: 1rem;
    overflow: visible;
  }
`;

export const Content = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

/* =================== CTA =================== */
export const CTAContent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;

  > .btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* =================== HEADER SOCIAL =================== */
export const HeaderSocialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &::after {
    content: '';
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
  }

  @media screen and (max-width: 600px){
    display: none;
  }
`;

/* =================== ME =================== */
export const MEContent = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1.5rem;

  > img {
    width: 16rem;
    margin: auto;
  }

  @media screen and (max-width: 600px){
    > img {
      width: 12rem;
      margin-top: -1.5rem;
    }

    align-items: center;
      justify-content: center;
      display: flex;
  }
`;

/* =================== SCROLL DOWN =================== */
export const ScrollDown = styled.div`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;

  @media screen and (max-width: 600px){
    display: none;
  }
`;

