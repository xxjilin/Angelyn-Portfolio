import React from 'react'
import { ContactContainer, ContactWrapper, ContactH1, Form, SingleItem, Label, Name, ImageContainer, TextArea, FormBtn, FormBtnLink, MessageSent, MessageAppear, ContactIcon } from './ContactElements'
import Icon from '../../images/connect.svg';
import emailjs from 'emailjs-com'

export default function ContactUS() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_t36k5op', 'template_9k3spht', e.target, 'user_IvjNOKrK52HrLWO14VACi')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()

    }


    return (
        <ContactContainer id='contact'>
            <ContactH1>
                Lets Connect!
            </ContactH1>
            <ContactWrapper>
                <ImageContainer>
                    <ContactIcon src={Icon} />
                </ImageContainer>
                <Form onSubmit={sendEmail}>
                    <SingleItem>
                        <Label htmlFor='name'>
                            Name
                            <Name
                                type="text"
                                name='name'
                                className='name'
                                placeholder='Enter your name'
                            />
                        </Label>
                    </SingleItem>
                    <SingleItem>
                        <Label htmlFor='subject'>
                            Subject
                            <Name
                                type="text"
                                name='subject'
                                className='email'
                                placeholder='Subject'
                            />
                        </Label>
                    </SingleItem>
                    <SingleItem>
                        <Label htmlFor='email'>
                            Email
                            <Name
                                type="text"
                                name='email'
                                className='email'
                                placeholder='Enter your E-mail'
                                required
                            />
                        </Label>
                    </SingleItem>
                    <SingleItem>
                        <TextArea
                            name='message'
                            id=''
                            cols='30'
                            rows='5'
                            placeholder='Your message...'
                        >
                        </TextArea>
                    </SingleItem>
                    <MessageSent then>Message has been sent.</MessageSent>
                    <FormBtn>
                        <FormBtnLink type='submit' primary='true' dark='true'>Send</FormBtnLink>
                    </FormBtn>
                </Form>
            </ContactWrapper>
        </ContactContainer>

    )
}






// const Contact = () => {


// export default Contact
