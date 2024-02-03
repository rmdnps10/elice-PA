import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset};
    html{
        font-size:10px;
    }
    body,div,p,header,section{
        font-family: "Pretendard";
        box-sizing: border-box;
    }
`;
