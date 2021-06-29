import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkScroll} from 'react-scroll'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { AiOutlineDownload,  } from "react-icons/ai";

export const SidebarContainer =styled.aside`
    position: fixed;
    z-index: 999;
    width:100%;
    height:100%;
    background: #aeeaf7 ;//#50C7C7#62e7e8
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')} ;
`
export const CloseIcon = styled(FaTimes)`
    color: #fff
`
export const Icon = styled.div `
    position:absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color:#fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;

    @media screen and(max-width) {
        grid-template-rows: repeat(5, 60px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #010606;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #Eff9f9;
    }
`
export const SideBtnWrap =styled.div`
    display: flex;
    justify-content: center;

`
export const SidebarRouter = styled.a`
    border-radius: 50px;
    background: #000d1a;
    white-space: nowrap;
    display: flex;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:  #000;
        color:#7acccc;
        transform: translateY(-2px);
    transition: all 0.2s ease-in-out
    }
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SocialIconLink = styled.a`
    color: #000d14;
    font-size: 30px;
    margin: 0 15px 0 15px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #Eff9f9;
    }
`
export const DownloadForward =styled(AiOutlineDownload)`
    margin-left: 8px;
    font-size: 20px;
`
export const DownloadCV =styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`