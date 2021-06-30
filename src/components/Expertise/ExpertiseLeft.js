import React from 'react';
import ExpertiseLeftItem from './ExpertiseLeftItem';
import { ExpertiseLeftContainer, Subtitle, ExpertiseLeftWrapper, ExpertiseLeftList} from './ExpertiseLeftElements';
import HTML from '../../images/html.png'
import CSS from '../../images/css.png'
import JS from '../../images/js.png'


const ExpertiseLeft = () => {
    return (
            <ExpertiseLeftContainer>
                <Subtitle>
                    Programming Languages that I use
                </Subtitle>
                <ExpertiseLeftWrapper>
                    <ExpertiseLeftList>
                        <ExpertiseLeftItem
                        src={HTML}
                        text='HTML'
                        description='Using HTML to structure a web page and its content.'
                        />
                    </ExpertiseLeftList>
                    <ExpertiseLeftList>
                        <ExpertiseLeftItem
                        src={CSS}
                        text='CSS'
                        description='Styling HTML elements using CSS.'
                        />
                    </ExpertiseLeftList>
                    <ExpertiseLeftList>
                        <ExpertiseLeftItem
                        src={JS}
                        text='JAVASCRIPT'
                        description='Adding interactive behavior to web pages.'
                        />
                    </ExpertiseLeftList>
                </ExpertiseLeftWrapper>
            </ExpertiseLeftContainer>
      
    )
}

export default ExpertiseLeft
