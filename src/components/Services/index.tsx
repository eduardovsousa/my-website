import React from 'react';
import {
  Container,
  Section,
  Service,
  ServiceContainer,
  ServiceHead,
  ServiceList,
} from './styles';
import { BiCheck } from 'react-icons/bi';

export function Services() {
  return (
    <Container id="services" className="container">
      <Section>
        <h5>O que ofereço</h5>
        <h2>Serviços</h2>
        <ServiceContainer>
          {/* PRIMEIRO CARD */}
          <Service>
            <ServiceHead>
              <h3>UI/UI Desing</h3>
            </ServiceHead>
            <ServiceList>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
            </ServiceList>
          </Service>
          {/* PRIMEIRO CARD */}

          {/* SEGUNDO CARD */}
          <Service>
            <ServiceHead>
              <h3>Web Development</h3>
            </ServiceHead>

            <ServiceList>

              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              {/* END OF UI */}
            </ServiceList>
          </Service>
          {/* SEGUNDO CARD */}

          {/* TERCEIRO CARD */}
          <Service>
            <ServiceHead>
              <h3>UI/UI Desing</h3>
            </ServiceHead>

            <ServiceList>
              {/* UI */}
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </li>
              {/* END OF UI */}
            </ServiceList>
          </Service>
          {/* TERCEIRO CARD */}
        </ServiceContainer>
      </Section>
    </Container>
  );
}
