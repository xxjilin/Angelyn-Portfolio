import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components'

export const ExpertiseItem = styled.li`
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: row;
    flex:1;
    margin: 0;
    border-radius: 10px;
    height: 80px;
    width: 400px;

    @media screen and (max-width: 768px) {
        height: 80px;
        width: 300px;
    }

    @media screen and (max-width: 480px) {
        height: 70px;
        width: 90px;
    }
    
     @media screen and (max-width: 380px) {
        height: 120px;
        width: 50px;
        flex-direction: column;
     }
`

export const Icon = styled.div`
    height: 70px;
    width: 70px;

     @media screen and (max-width: 768px) {
        height: 70px;
        width: 70px;
    }

    @media screen and (max-width: 480px) {
        height: 70px;
        width: 70px;
    }
    @media screen and (max-width: 380px) {
        height: 60px;
        width: 60px;
    }
`

export const Image = styled.img`
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

        

        /* box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17); */
//   -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
//   filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
//   border-radius: 10px;
//   overflow: hidden;
/* 
        &:hover {
            transform: scale(1.1);} */
`

// export const Link = styled(LinkRouter)`
//     display: flex;
//     flex-flow: column;
//     width: 100px;
//     box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
//   -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
//   filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
//   border-radius: 10px;
//   overflow: hidden;
//   text-decoration: none;
// `
export const ExpertiseItemInfo = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 450px;
    white-space: normal;
    height: 70;

     @media screen and (max-width: 768px) {
        width: 300px;
        height: 60px;
    }
    @media screen and (max-width: 480px) {
        width: 300px;
        height: 50px;
    }
`
export const Text = styled.h5`
color: #000d1a;
  font-size: 18px;
  line-height: 24px;
  text-align: left;

   @media screen and (max-width: 768px) {
        font-size: 15px;
    }
    @media screen and (max-width: 480px) {
        font-size: 13px;
    }
`
export const Description = styled.p`
color: #000d1a;
  font-size: 14px;
  line-height: 24px;
  text-align: left;

   @media screen and (max-width: 768px) {
        font-size: 12px;
    }
    @media screen and (max-width: 480px) {
        font-size: 10px;
    }
  
`

const Portfolio1Item = (props) => {
    return (
        <>
        <ExpertiseItem>
            <Icon>
                 <Image src={props.src} alt='Programming Language'/>
            </Icon>
                   
            <ExpertiseItemInfo>
                <Text>
                  {props.text}  </Text>
                <Description>
                    {props.description}
                </Description>
            </ExpertiseItemInfo>
        </ExpertiseItem>
        </>
    )
}

export default Portfolio1Item
