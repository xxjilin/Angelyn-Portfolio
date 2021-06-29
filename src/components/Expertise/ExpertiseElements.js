import styled from 'styled-components';

export const ExpertiseContainer = styled.div`
    color: #000d1a;
    background-color: black;

    @media screen and (max-width:768px){
        padding: 80px 0;
    }
`
export const ExpertiseWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const Column1 = styled.div`
     margin-bottom: 15px;
     padding: 0 15px;
     grid-area: col1;
`
export const Column2 = styled.div`
     margin-bottom: 15px;
     padding: 0 15px;
     grid-area: col2;
`
export const ExpertiseLanguage = styled.div `
     display: grid;
     grid-auto-columns: minmax(auto, 1fr);
     align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

     @media screen and (max-width: 768px) {
         grid-template-areas: ${({imgStart}) =>  (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
     }
`
export const Topline = styled.div`
     color: #000d1a;
     font-size: 16px;
     line-height: 16px;
     font-weight: 700;
     letter-spacing: 1.4px;
     text-transform: uppercase;
     margin-bottom: 16px;
`
export const Details = styled.div`
     max-width: 540px;
     display: flex;
     padding: 0;
     padding-bottom: 60px;
`
export const LanguageLogo = styled.div`
     max-width: 555px;
     height: 100%;
`
export const Description = styled.p`
     max-width: 440px;
     margin-bottom: 35px;
     font-size: 18px;
     line-height: 24px;
     color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const ImgWrap = styled.div`
     max-width: 555px;
     height: 100%;
`
export const Img = styled.img`
     width: 100%;
     margin: 0 0 10px 0;
     padding-right: 0;
`