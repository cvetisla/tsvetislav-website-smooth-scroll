import React from 'react'
import Icon1 from '../images/svg-39.svg'
import Icon2 from '../images/svg31.svg'
import Icon3 from '../images/svg-7.svg'
import { Button, Button1 } from '../ButtonElements';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Demo Projects</ServicesH1>
            <ServicesWrapper>
             <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Crypto Search</ServicesH2>
            <ServicesP>Crypto Search is my first live project which allows you to track live data for different crypto currencies.</ServicesP>
                              <Button1 href="https://cryptosearch.netlify.app/?fbclid=IwAR0rfP7fdcYkKk3WcAnGorf6IjexYjeRncl5omB04kmBZ5yxywoCxRhrVSs" target="_blank" aria-label="Linkedin">Check it</Button1> 
 

             </ServicesCard>
             <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Interactive Quiz</ServicesH2>
            <ServicesP>Interactive Quiz made with Html,CSS,Javascript with progress bar and best score table</ServicesP>
            <Button1 href="https://slavsquiz.netlify.app/" target="_blank" aria-label="quiz">Check it</Button1> 

             </ServicesCard>
             <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>ClientProject2</ServicesH2>
            <ServicesP>Currently open for client ideas for interactive webpages.</ServicesP>
            <Button>Check it</Button> 


             </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
