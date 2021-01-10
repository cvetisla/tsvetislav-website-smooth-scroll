import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {Link} from 'react-router-dom'


export const Button = styled(LinkR)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#01BF71' : '#010606')
};
white-space: nowrap;
padding: ${({big}) => (big ? '10px 48px' : '10px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#f7f8fa')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;


&:hover{
transition: all 0.2s ease-in-out;
background: ${({primary}) => (primary ? '#f7f8fa' : '#01BF71')};
};
}

`



export const Button1 = styled.a `
border-radius: 50px;
background: ${({primary}) => (primary ? '#01BF71' : '#010606')
};
white-space: nowrap;
padding: ${({big}) => (big ? '10px 48px' : '10px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#f7f8fa')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;


&:hover{
transition: all 0.2s ease-in-out;
background: ${({primary}) => (primary ? '#f7f8fa' : '#01BF71')};
};
}

`
