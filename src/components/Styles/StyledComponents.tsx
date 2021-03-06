import styled from 'styled-components';
import { color, font, mediaTo } from '../../assets/styles';

export const section = styled.section`
   margin: 16px;
`;

export const h1 = styled.h1`
   font-family: lobster, sans-serif;
   ${font('h1', '', { style: 'italic', weight: 'normal' })};
   ${mediaTo('sTablet')} {
      ${font(50)};
   }
   ${mediaTo('mobile')} {
      ${font(40)};
   }
   padding: 0 10%;
`;

export const h2 = styled.h2`
   ${font('h2', '', { weight: 'bold' })};
   ${mediaTo('sTablet')} {
      ${font(24)};
   }
   ${mediaTo('mobile')} {
      ${font(20)};
   }
   padding: 0 10%;
`;

export const h3 = styled.h3`
   ${color('gold')}
   ${font('h3')}
   margin: 48px 0 36px;
   padding: 0 15%;
   ${mediaTo('sTablet')} {
      padding: 0 10%
   }
   ${mediaTo('mobile')} {
      padding: 0 5%
   }
`;

export const h4 = styled.h4`
   ${color('darker')}
   ${font('h4')}
   margin: 40px 0 32px;
   padding: 0 5%;
   ${mediaTo('sTablet')} {
      padding: 0 3%;
   }
   ${mediaTo('mobile')} {
      padding: 0 1%;
   }
`;

export const h5 = styled.h5`
   margin: 24px 0;
   padding: 0 7%;
   ${color('darker')}
   ${font('h5', '', { weight: 'normal' })}
   letter-spacing: 1px;
   ${mediaTo('sTablet')} {
      padding: 0 5%;
   }
   ${mediaTo('mobile')} {
      padding: 0 3%;
   }
`;

export const li = styled.li`
   line-height: 30px;
   margin: 4px 0 4px 16px;
   letter-spacing: 1px;
`;

export const ul = styled.ul`
   ${font('paragraph')}
   margin: 20px;
   padding-left: 16px;
   ${mediaTo('mobile')} {
      padding-left: 0;
      margin-right: 0px;
   }
`;

export const p = styled.p`
   ${color('darkest')}
   margin: 10px;
   ${font('paragraph')}
   overflow-wrap: break-word;
   word-wrap: break-word;
   word-break: break-word;
   hyphens: auto;
`;
