import React from 'react';
import styled from 'styled-components'

export const CardItem = styled.li`
    display: flex;
    flex-direction: column;
    flex:1;
    margin: 0;
    border-radius: 10px;
    height: 300px;
    width: 310px;

     @media screen and (max-width: 920px) {
        height: 350px;
        width: 320px;
    }
    
    @media screen and (max-width: 768px) {
        height: 320px;
        width: 250px;
    }

     @media screen and (max-width: 480px) {
        height: 250px;
        width: 240px;
    }
    
`
export const Figure = styled.div`
        position: relative;
        width: 100%;
        padding-top: 75%;
        overflow: hidden;

       &::after {
  content: attr(data-category);
  position: absolute;
  bottom: 0;
  margin-left: 10px;
  padding: 6px 8px;
  max-width: calc((100%) - 60px);
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background-color: #13c6d6;
  box-sizing: border-box;
}
`

export const Image = styled.img`
        position: absolute;
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

        &:hover {
            transform: scale(1.1);}
`

export const Link = styled.a`
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 10px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`
export const CardsItemInfo = styled.div`
    padding: 10px;
    margin-top: 15px;

     @media screen and (max-width: 480px) {
        padding: 0;
    }
`
export const Text = styled.p`
color: #000d1a;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  @media screen and (max-width: 768px) {
        font-size: 15px;
    }

   @media screen and (max-width: 480px) {
        font-size: 14px;
    }

`

const Portfolio1Item = (props) => {
    return (
        <>
        <CardItem>
            <Link href={props.path} target='_/blank' >
                <Figure data-category={props.label}>
                    <Image src={props.src} alt='frontendmentor challenge'/>
                </Figure>
            
            <CardsItemInfo>
                <Text>
                  {props.text}  </Text>
            </CardsItemInfo>
            </Link>
        </CardItem>
        </>
    )
}

export default Portfolio1Item
