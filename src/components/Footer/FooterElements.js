import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #101522;
`
export const FooterWrap =  styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`
// export const FooterLinksContainer = styled.div`
//     display: flex;
//     justify-content: center;

//     @media screen and (max-width: 820px){
//         padding-top: 32px;
//     }
// `
// export const FooterLinksWrapper = styled.div`
//     display: flex;
    
//     @media screen and (max-width: 820px){
//         flex-direction: column;
//     }
// `
// export const FooterLinkItems = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     margin: 16px;
//     text-align: left;
//     width: 160px;
//     box-sizing: border-box;
//     color: #fff;

//     @media screen and (max-width: 420px) {
//         margin: 0;
//         padding: 10px;
//         width: 100%;
//     }
// `
// export const FooterLinkTitle = styled.h1`
//     font-size: 14px;
//     margin-bottom: 16px;
// `
// export const FooterLink = styled(Link)`
//     color: #fff;
//     text-decoration: none;
//     margin-bottom: 0.5rem;
//     font-size: 14px;

//     &:hover {
//         color: #01bf71;
//         transition: 0ms.3s ease-out;
//     }
// `
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`
export const SocilaMediaWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const SocialLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    border-right: 3px #fff solid;
    padding-right: 60px;

    @media screen and (max-width: 820px) {
        margin-right: 0;
        padding-right: 0;
        border-right: 0;
    }
`
export const SocialRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SocialLogo = styled(Link)`
    /* color: #fff; */
    justify-items: center;
    cursor: pointer;
    /* text-decoration: none;
    font-size: 1.5rem; */
    display:flex;
    align-items: center;
    margin-bottom: 10px;
    /* font-weight: bold; */
    /* position: absolute; */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
    height: 45px;
    width: 45px;
`
export const Social= styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
`

export const SocialLogoIcon = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    
`
export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`
export const Powered = styled.small`
    color: #fff;
    margin-bottom: 16px;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin-right: 30px;
`