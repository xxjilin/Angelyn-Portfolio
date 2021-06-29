import React from 'react'
import ExpertiseRightItem from './ExpertiseRightItems';
import {ExpertiseRightContainer, ExpertiseRightWrapper, Subtitle, ExpertiseRightList} from './ExpertiseRightElements'
import REACT from '../../images/react.png';
import PHP from '../../images/php.png';
import SASS from '../../images/sass.png';
import FIGMA from '../../images/figma.png';
import GIT from '../../images/git.png';
import GITHUB from '../../images/github.png';
import PHOTOSHOP from '../../images/photoshop.png';
import ILLUSTRATOR from '../../images/illustrator.png';
import XD from '../../images/xd.png';
import MYSQL from '../../images/mysql.png';



const ExpertiseRight = () => {
    return (
        <ExpertiseRightContainer>
            <Subtitle>
               Other Languages and Tools that I use
            </Subtitle>
            <ExpertiseRightWrapper>
                <ExpertiseRightList>
                    <ExpertiseRightItem 
                    src={REACT} 
                    text='React'
                    />
                </ExpertiseRightList>
                <ExpertiseRightList>
                    <ExpertiseRightItem 
                    src={SASS} 
                    text='Sass'
                    />
                </ExpertiseRightList>
                <ExpertiseRightList>
                    <ExpertiseRightItem 
                    src={PHP} 
                    text='PHP'
                    />
                </ExpertiseRightList>
                <ExpertiseRightList>
                    <ExpertiseRightItem 
                    src={GIT} 
                    text='Git'
                    />
                </ExpertiseRightList>
                <ExpertiseRightList>
                    <ExpertiseRightItem 
                    src={MYSQL} 
                    text='MySql'
                    />
                </ExpertiseRightList>
                <ExpertiseRightList>
                    <ExpertiseRightItem 
                    src={GITHUB} 
                    text='Github'
                    />
                </ExpertiseRightList>
                <ExpertiseRightList>
                    <ExpertiseRightItem 
                    src={FIGMA} 
                    text='Figma'
                    />
                </ExpertiseRightList>
                <ExpertiseRightList>
                    <ExpertiseRightItem 
                    src={PHOTOSHOP} 
                    text='Adobe PS'
                    />
                </ExpertiseRightList>
                <ExpertiseRightList>
                    <ExpertiseRightItem id='ai'
                    src={ILLUSTRATOR} 
                    text='Adobe AI'
                    />
                </ExpertiseRightList>
                <ExpertiseRightList>
                    <ExpertiseRightItem 
                    src={XD} 
                    text='Adobe XD'
                    />
                </ExpertiseRightList>
            </ExpertiseRightWrapper>
        </ExpertiseRightContainer>
    )
}

export default ExpertiseRight
