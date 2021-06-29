import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { AiOutlineDownload,  } from "react-icons/ai";


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#aeeaf7' : 'transparent')}; //#62e7e8
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index:10;

    @media screen and (max-width:960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index:1;
    width:100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkRouter)`
    justify-self: center;
    align-self: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
    height: 50px;
    width: 50px;
    
`
export const NavLogoIcon = styled.img`
    width: 100%;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
        color: #000d1a;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks =  styled(LinkScroll)`
    color: #000d1a;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color:#00c1d1;//#f2feff;//#7acccc;
    }

    &.active {
        border-bottom: 3px solid #000d1a;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width:768px) {
        display: none
    }
`
export const NavBtnLink = styled.a`
    border-radius: 50px;
    justify-content: center;
    display: flex;
    align-items: center;
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
        background:  #000;
        color:#7acccc;
        transform: translateY(-2px);
    transition: all 0.2s ease-in-out
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