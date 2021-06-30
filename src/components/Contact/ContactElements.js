import styled from 'styled-components'

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
    background-color: #F9fcff;
    

    @media screen and (max-width: 900px)  {
        height: 1200px;
    }
`
export const ContactH1 = styled.h1`

    margin-top: 4rem;  

`
export const ContactWrapper = styled.div`
    margin: 100px auto;
    padding: 20px;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;

     > * {
         margin: 0 10px;
    }

    @media screen and (max-width: 900px)  {
        grid-template-columns: 1fr;
    }
`

export const Form = styled.form`
    width: 100%;
    padding: 30px;
    border-radius: 20px;
    background-color: #f7f7f9;
    max-width: 450px;
    height: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`
export const SingleItem = styled.div`
    margin-top: 5px;
`
export const Label = styled.label`
    display: block;
    letter-spacing: 0.1rem;
    margin-bottom: 10px;
    color: #000d14;
`
export const Name = styled.input`
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    border: none;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    border-radius: 5px;
    margin-top: 5px;
`
export const TextArea =styled.textarea`
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    border: none;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    border-radius: 5px;
    margin-top: 5px;
`
export const MessageSent = styled.div`
    margin:10px 10px;
    font-style: italic;
    color: #595959;
    display: none;
`
export const FormBtn = styled.div`
    margin-top: 20px;
    justify-self: center;
`
export const FormBtnLink = styled.button`
    border-radius: 50px;
    background: #000d1a;
    white-space: no-wrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #aeeaf7;
        color: #000d1a;
        
    }
`
export const ImageContainer = styled.div`
     width: 555px;
     height: 100%;
     @media screen and (max-width: 1100px)  {
        width: 400px;
    }

     @media screen and (max-width: 768px)  {
        width: 380px;
        margin-bottom: 50px;
    }
     @media screen and (max-width: 480px)  {
        width: 300px;
        margin-bottom: 60px;
    }
`

export const ContactIcon = styled.img`
    height: 100%;
    width: 100%;
`