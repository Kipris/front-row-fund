import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ContactBlock, ContactWrap, Title, Description, FormContainer, Form, Label, Input, Textarea, Submit, Error, Success, SuccessTitle, SuccessText } from './contact.styled';
import { Container } from '../components/container';
import { Button, ButtonColor, ButtonType } from '../components/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import letter from '../assets/img/letter.svg';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [ isSubmitted, setSubmitted ] = useState(false);

  const onSubmit = () => {
    emailjs.sendForm('service_nqxhtsr', 'template_p92vxmt', '#contact-form', 'Hqx5vnKbFE08R4iHv')
      .then((result) => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
        console.log(result.text);
      }, (error) => {
        console.error(JSON.stringify(error));
      });
    reset();
  };

  return (
    <ContactBlock id='contact'>
      <Container>
        <ContactWrap>
          <div>
            <Title>Want to partner with us?</Title>
            <Description>We are actively investing into great teams and great companies. Connect with us to see how we can work together</Description>
          </div>
          <FormContainer>
            {isSubmitted ? (
              <Success>
                <LazyLoadImage src={letter} alt='Mail sent' />
                <SuccessTitle>Thank you!</SuccessTitle>
                <SuccessText>Your message has been sent</SuccessText>
                <Button onClick={() => setSubmitted(false)}>OK</Button>
              </Success>
            ) : (
              <Form onSubmit={handleSubmit(onSubmit)} id='contact-form'>
                <div>
                  {/* Name */}
                  <Label>
                    <Input
                      {...register('userName', { required: true })}
                      type='text'
                      name='userName'
                      placeholder='Name'
                    />
                    <Error>
                      {errors.userName?.type === 'required' && 'Please provide a valid name'}
                    </Error>
                  </Label>

                  {/* Company */}
                  <Label>
                    <Input
                      {...register('company')}
                      type='text'
                      name='company'
                      placeholder='Company'
                    />
                  </Label>

                  {/* Phone */}
                  <Label>
                    <Input
                      {...register('phone', {
                        required: true,
                      })}
                      type='text'
                      name='phone'
                      placeholder='Phone number'
                    />
                    <Error>
                      {errors.phone?.type === 'required' && 'Please provide a valid phone number'}
                      {errors.phone?.message}
                    </Error>
                  </Label>

                  {/* Email */}
                  <Label>
                    <Input
                      {...register('email', {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please provide a valid email address',
                        }
                      })}
                      type='email'
                      name='email'
                      placeholder='Email'
                    />
                    <Error>
                      {errors.email?.type === 'required' && 'Please provide a valid email address'}
                      {errors.email?.message}
                    </Error>
                  </Label>
                </div>

                {/* Message */}
                <Label>
                  <Textarea
                    {...register('message')}
                    label='message'
                    name='message'
                    rows='4'
                    placeholder='Your message'
                  />
                </Label>
                <Submit type='submit' value='Send' />
              </Form>
            )}
          </FormContainer>
        </ContactWrap>
      </Container>
    </ContactBlock>
  );
}

export default Contact;
