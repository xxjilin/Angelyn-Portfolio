import styled from 'styled-components'
import { Link} from 'react-scroll'

export const Button = styled(Link)`
background: ${({ primary }) => (primary ? '#000d1a' : '#fff')};
white-space: nowrap;
outline: none;
border: none;
border-radius: 30px;
margin: 0 1rem;
min-width: 100px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
transition: 0.3s;
display: flex;
justify-content: center;
align-items: center;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
font-size: ${({big}) => (big ? '20px': '16px') };

&:hover {
    color: ${({primary}) => (primary ? '#7acccc' : '#536278')};
    background: ${({ primary }) => (primary ?  '#000' : '#000d1a')};
    transform: translateY(-2px);
    transition: all 0.2s ease-in-out
}

@media screen and (max-width: 320px) {
    padding: ${({big}) => (big ? '10px 28px' : '10px 16px')};
    font-size: ${({big}) => (big ? '10px': '8px') };
    margin: 0 20px;
}
`;