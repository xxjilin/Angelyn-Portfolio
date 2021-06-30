import React from 'react';
import OwnProjectItems from './OwnProjectItems';
import {Cards, CardsContainer, CardsWrapper, Subtitle, Portfolio1List } from './OwnProjectElements';
import MusicPlayer from '../../../images/music-player.png'
import Wonder from '../../../images/wonder.png'
import Netflix from '../../../images/netflixclone.png'
import Calculator from '../../../images/calculator1.png'

const OwnProject = () => {
    return (
        <>
        <Cards>
            <CardsContainer>
                <Subtitle>Mini Projects</Subtitle>
                <CardsWrapper>
                    <Portfolio1List>
                        <OwnProjectItems
                        src={MusicPlayer}
                        text='Glass Design Music Player'
                        path='//glass-design-music-player-by-adequito.netlify.app/'
                        label='ReactJS'
                        />
                    </Portfolio1List>
                    <Portfolio1List>
                    <OwnProjectItems
                        src={Wonder}
                        text='Simple Responsive Webpage'
                        path='//simple-responsive-webpage-by-adequito.netlify.app/'
                        label='ReactJS'
                        />
                        </Portfolio1List>
                    <Portfolio1List>
                        <OwnProjectItems
                        src={Calculator}
                        text='Neumorphic Calculator'
                        path='//neumorphic-calculator-by-adequito.netlify.app' 
                        label='VanillaJS'
                        />
                    </Portfolio1List>
                    <Portfolio1List>
                        <OwnProjectItems
                        src={Netflix}
                        text='Netflix Clone'
                        path='//netflix-clone-by-adequito.netlify.app/'
                        label='HTML | CSS'
                        />
                    </Portfolio1List>
                </CardsWrapper>
            </CardsContainer>
        </Cards>
        </>
    )
}

export default OwnProject
