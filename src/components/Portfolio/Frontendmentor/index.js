import React from 'react';
import Portfolio1Item from './Portfolio1Item';
import {Cards, CardsContainer, CardsWrapper, Subtitle, Portfolio1List } from './Portfolio1Elements';
import Loopstudios from '../../../images/loopstudios.jpg'
import Testimonials from '../../../images/testimonials.jpg'
import Room from '../../../images/room.jpg'
import Faq from '../../../images/faq.jpg'

const Portfolio1 = () => {
    return (
        <>
        <Cards>
            <CardsContainer>
                <Subtitle>FrontendMentor Challenges</Subtitle>
                <CardsWrapper>
                    <Portfolio1List>
                        <Portfolio1Item
                        src={Loopstudios}
                        text='Loopstudios'
                        path='//loopstudios-frontendmentor-challenge-by-adequito.netlify.app/'
                        label='ReactJS'
                        />
                    </Portfolio1List>
                    <Portfolio1List>
                    <Portfolio1Item
                        src={Testimonials}
                        text='Testimonials'
                        path='//testimonials-frontendmentor-challenge-by-adequito.netlify.app/'
                        label='HTML | CSS'
                        />
                        </Portfolio1List>
                    <Portfolio1List>
                        <Portfolio1Item
                        src={Faq}
                        text='Faq Accordion'
                        path='//faq-accordion-frontendmentor-challenge-by-adequito.netlify.app/'
                        label='VanillaJS'
                        />
                    </Portfolio1List>
                    <Portfolio1List>
                        <Portfolio1Item
                        src={Room}
                        text='Room'
                        path='//room-frontendmentor-by-adequito.netlify.app/'
                        label='VanillaJS | SCSS'
                        />
                    </Portfolio1List>
                </CardsWrapper>
            </CardsContainer>
        </Cards>
        </>
    )
}

export default Portfolio1
