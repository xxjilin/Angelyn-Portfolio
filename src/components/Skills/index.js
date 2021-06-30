import React from 'react';
import Icon1 from '../../images/code.svg';
import Icon2 from '../../images/wd.svg';
import Icon3 from '../../images/ui.svg';
import {SkillsContainer, SkillsH1, SkillsCard, SkillsH2, SkillsIcon, SkillsP, SkillsWrapper} from './SkillsElements'

const Skills = () => {
    return (
        <SkillsContainer id='skills'>
            <SkillsH1>
                My Skills
            </SkillsH1>
            <SkillsWrapper>
                <SkillsCard>
                    <SkillsIcon src={Icon1}/>
                    <SkillsH2>Web Development</SkillsH2>
                    <SkillsP>Building and creating responsive websites for the internet.</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={Icon2}/>
                    <SkillsH2>Web Design</SkillsH2>
                    <SkillsP>Creating the design and layout of a website or web pages.</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={Icon3}/>
                    <SkillsH2>UI Design</SkillsH2>
                    <SkillsP> Creating visual, interactive elements of a product interface.</SkillsP>
                </SkillsCard>
            </SkillsWrapper>
        
        </SkillsContainer>
    )
}

export default Skills
