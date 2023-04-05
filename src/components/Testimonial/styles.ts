import styled from 'styled-components';

export const Container = styled.section``;

export const Section = styled.section`
  margin-top: 8rem;

  > .TestimonialContainer {
    width: 40%;
    margin: auto;
    padding-bottom: 4rem;

    > .swiper-pagination-clickable .swiper-pagination-bullet {
      background: var(--color-primary);
    }

    @media screen and (max-width: 1024px) {
      width: 60%;
    }

    @media screen and (max-width: 600px) {
      width: var(--container-width-sm);
    }
  }

  > .TestimonialContainer .TestimonialContent {
    background: var(--color-bg-variant);
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;

    .client__review {
      color: var(--color-light);
      font-weight: 300;
      display: block;
      width: 80%;
      margin: 0.8rem auto 0;

      @media screen and (max-width: 600px) {
        width: var(--container-width-sm);
      }
    }
  }
`;

export const TestimonialContainer = styled.div``;

export const TestimonialAvatar = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.4rem solid var(--color-primary-variant);
`;
