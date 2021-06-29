import React from 'react'
import styled from 'styled-components'
import Portfolio1 from './Frontendmentor/index'
import OwnProject from './OwnProject'
import Slider from './Slider/Slider'

export const PortfolioContainer = styled.div`
    height: 2700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F9fdff;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        height: 3200px; 
    }

    @media screen and  (max-width: 480px) {
        height: 3000px;
    }
`
export const Title = styled.h1`
    font-size: 2.5rem;
    color: #000d1a;
    margin-top: 1rem;  
  margin-bottom: 4rem;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        margin-top: 1rem;
  margin-bottom: 3rem;

    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 0;
    }
`
export const PortfolioWrapper = styled.div`
    /* max-width: 1000px; */
    height: auto;
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 50px;
  

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

const Portfolio = () => {
    return (
        
        <PortfolioContainer id='portfolio'>
            <Title>
                My Works
            </Title>
            <PortfolioWrapper>
                <Slider/>
                <Portfolio1/>
                <OwnProject/>
            </PortfolioWrapper>
            
        </PortfolioContainer>
    
    )
}

export default Portfolio
