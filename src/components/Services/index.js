import React from 'react'
import Icon1 from '../images/svg-5.svg'
import Icon2 from '../images/svg-6.svg'
import Icon3 from '../images/svg-7.svg'
import { Button } from '../ButtonElements';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Demo Projects</ServicesH1>
            <ServicesWrapper>
             <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>LibraB</ServicesH2>
            <ServicesP>LibraB is going to be an interactive online library for e-books.</ServicesP>
                              <Button>Check it</Button> 
 

             </ServicesCard>
             <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>ClientProject1</ServicesH2>
            <ServicesP>Currently open for client ideas for interactive webpages.</ServicesP>
            <Button>Check it</Button> 

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
