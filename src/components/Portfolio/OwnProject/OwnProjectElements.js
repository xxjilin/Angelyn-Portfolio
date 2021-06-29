import styled from 'styled-components';

export const Cards = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: .5rem;
    
     @media screen and (max-width: 768px) {
        height: 1350px; 
        margin-top: 1rem;
    }

    @media screen and  (max-width: 480px) {
        height: 1200px;
        padding: 0;
        margin-top: .5rem;
    }

    &:fade-img {
  animation-name: fade-img;
  animation-duration: 2s;
}
`

export const Subtitle = styled.h3`
    font-size: 24px;
     line-height: 16px;
     font-weight: 700;
     letter-spacing: 1.4px;
      margin-bottom: 45px;
     color: #54bcbc;

     @media screen and (max-width: 768px) {
        font-size: 18px;
         margin-bottom: 35px;
    }
    @media screen and (max-width: 480px) {
        font-size: 16px;
         margin-bottom: 25px;
    }
`
export const CardsContainer = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;

    @media screen and (max-width: 768px) {
        height: 1100px; 
    }

    @media screen and  (max-width: 480px) {
        height: 1300px;
    }
    &:fade-img {
  animation-name: fade-img;
  animation-duration: 2s;
}
`
export const CardsWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    grid-gap: 2rem;
    padding: 0 50px;

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
        grid-gap: 1rem;
    }
`
export const Portfolio1List = styled.ul`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 330px;
    width: 350px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

     @media screen and (max-width: 920px) {
        height: 350px;
        width: 320px;
    }
    
    @media screen and (max-width: 768px) {
        height: 290px;
        width: 280px;
    }

    @media screen and (max-width: 480px) {
        height: 260px;
        width: 270px;

    }
`
