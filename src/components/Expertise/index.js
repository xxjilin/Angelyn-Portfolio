import React from 'react'
import styled from 'styled-components'
import ExpertiseLeft from './ExpertiseLeft'
import ExpertiseRight from './ExpertiseRight'



export const ExpertiseContainer = styled.div`

    display: flex;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F9FEFF;
    


     @media screen and (max-width: 1100px) {
        height: 1300px; 
    }
     @media screen and (max-width: 780px) {
        height: 1300px; 
    }

    @media screen and  (max-width: 480px) {
        height: 1200px;
    }

    @media screen and  (max-width: 380px) {
        height: 1600px;
    }

`
export const Title = styled.h1`
    font-size: 36px;
    color: #000d1a;
    margin-top: 2rem;

    @media screen and (max-width: 780px) {
        height: 24px; 
    }

    @media screen and  (max-width: 480px) {
        height: 18px;
    }
`
export const PortfolioWrapper = styled.div`
    height: 400px;
    margin: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    justify-content: center;
    grid-gap: 24px;
    padding: 0 50px;

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr ;
        height: 1000px;
        margin: 80px;

    }

    @media screen and (max-width: 780px) {
        grid-template-columns: 1fr;
        padding: 0 10px;
        height: 1100px;
        margin: 90px;
    }

    @media screen and (max-width: 480px) {
        padding: 0 5px;
        height: 1100px;
        margin: 100px;
        grid-gap: 10px;
    }

     @media screen and (max-width: 380px) {
        padding: 0 2px;
        height: 1200px;
        margin: 110px; 
     }
`



const Expertise = () => {
    return (
        
        <ExpertiseContainer id='expertise'>
            <Title>
                My Expertise
            </Title>
            <PortfolioWrapper>
                <ExpertiseLeft/>
                <ExpertiseRight/>
            </PortfolioWrapper>
            
        </ExpertiseContainer>
    
    )
}

export default Expertise
