import styled from 'styled-components';

export const ExpertiseRightContainer = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

     @media screen and (max-width: 780px) {
        height: 550px; 
    }

    @media screen and  (max-width: 480px) {
        height: 600px;
    }

     @media screen and  (max-width: 380px) {
        height: 600px;
    }
    &:fade-img {
  animation-name: fade-img;
  animation-duration: 2s;
    }
`
export const ExpertiseRightWrapper = styled.div`
    height: 250px;
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    align-items: center;
    grid-gap: 20px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        height: 400px; 
        padding: 0 40px;
    }

     @media screen and (max-width: 780px) {
        height: 470px; 
        padding: 0 30px;
        grid-template-columns: repeat(3, 4fr);
    }

    @media screen and  (max-width: 480px) {
        height: 500px;
        padding: 0 20px;
         grid-template-columns: repeat(3, 2fr);
    }

    @media screen and  (max-width: 380px) {
        height: 480px;
        padding: 0 10px;
         grid-template-columns: repeat(2, 5fr);
    }

`
export const ExpertiseRightList = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    height: 90px;
    width: 90px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin-bottom: 10px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        height: 90px; 
        width: 90px;
    }

    @media screen and  (max-width: 480px) {
        height: 80px; 
        width: 80px;
    }
`
export const Subtitle = styled.h3`
    font-size: 18px;
     line-height: 16px;
     font-weight: 700;
     letter-spacing: 1.4px;
     text-transform: uppercase;
     margin-bottom: 20px;
     color: #54bcbc;

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }
    @media screen and (max-width: 480px) {
        font-size: 13px;
    }
`
export const Icon = styled.div`
    width: 100px;
    height: 100px;

    @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px
    }
    @media screen and (max-width: 480px) {
        width: 60px;
        height: 60px;
    }
`
export const Img = styled.img`
        position: relative;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        object-fit: cover;
        transition: all 0.2s linear;
`
