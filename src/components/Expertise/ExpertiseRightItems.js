import React from 'react'
import styled from 'styled-components'

export const ExpertiseItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    flex: 1;
    height: 90px;
    width: 90px;

        @media screen and (max-width: 768px) {
        height: 90px;
        height: 90px;
    }

    @media screen and (max-width: 480px) {
        max-height: 80px;
        min-height: 80px;
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
        height: 50px;
        width: 50px;
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
`
export const ExpertiseItemInfo = styled.div`
    padding: 10px;
    display: flex;
    max-width: 90px;
    white-space: normal;
    margin-bottom: 10px;
`
export const Text = styled.p`
color: #000d1a;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  @media screen and (max-width: 480px) {
        margin-top: 10px;
    }
`

const ExpertiseRightItems = (props) => {
    return (
        <>
        <ExpertiseItem>
            <Icon>
                <Image src={props.src} alt='Tools'/>
            </Icon>
            <ExpertiseItemInfo>
                <Text>
                    {props.text}
                </Text>
            </ExpertiseItemInfo>
        </ExpertiseItem>
        </>
    )
}

export default ExpertiseRightItems
