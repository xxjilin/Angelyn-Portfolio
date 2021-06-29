import styled from 'styled-components'

export const ExpertiseLeftContainer = styled.div`
    height: 300;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    @media screen and (max-width: 1000px) {
        height: 450px; 
    }

     @media screen and (max-width: 768px) {
        height: 460px; 
    }

    @media screen and  (max-width: 480px) {
        height: 400px;
    }

    @media screen and  (max-width: 380px) {
        height: 550px;
    }
    &:fade-img {
  animation-name: fade-img;
  animation-duration: 2s;
    }
`
export const ExpertiseLeftWrapper = styled.div`
    height: 350px;
    display: grid;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        height: 400px;
        padding: 0 40px; 
    }

     @media screen and (max-width: 780px) {
        height: 380px; 
        padding: 0 30px;
    }

    @media screen and  (max-width: 480px) {
        height: 350px;
        padding: 0 10px;
         grid-gap: 5px;
    }

`
export const ExpertiseLeftList = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    height: 100px;
    width: 500px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

     @media screen and (max-width: 780px) {
        height: 110px; 
        width: 400px;
    }

    @media screen and  (max-width: 480px) {
        height: 90px; 
        width: 400px;
    }

    @media screen and  (max-width: 380px) {
        height: 150px; 
        width: 290px;
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
     white-space: normal;

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