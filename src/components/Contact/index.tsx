import React from 'react';
import {
  ContactContainer,
  ContactOption,
  ContactOptions,
  Container,
  Form,
  Section,
} from './styles';
import { MdOutlineEmail, MdWhatsapp } from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7m6opza', 'template_jifm6y8', form.current, 'JgU2beBR_vPZSaaMH');

    e.target.reset();
  };

  return (
    <Container id="contact" className="container">
      <Section>
        <h5>Vamos conversar</h5>
        <h2>Entre em contato</h2>

        <ContactContainer>
          <ContactOptions>
            <ContactOption>
              <MdOutlineEmail className="Icon" />
              <h4>E-mail</h4>
              <h5>eduardovsousadeveloper<br/>@outlook.com</h5>
              <a href="mailto:eduardovsousadeveloper@outlook.com">Mande uma mensagem</a>
            </ContactOption>

            <ContactOption>
              <MdWhatsapp className="Icon" />
              <h4>WhatsApp</h4>
              <h5>+55 (11) 97951-1654</h5>
              <a
                target="_blank"
                href="https://wa.me/5511979511654?text=Ol%C3%A1%2C+vi+seu+site+e+tenho+perguntas."
                rel="noreferrer"
              >
                Mande uma mensagem
              </a>
            </ContactOption>
          </ContactOptions>

          <Form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="*Nome"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="*E-mail"
              required
            />
            <textarea
              name="message"
              rows={7}
              id="message"
              placeholder="*Mensagem"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Enviar mensagem
            </button>
          </Form>

        </ContactContainer>
      </Section>
    </Container>
  );
}
