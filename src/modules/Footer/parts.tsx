import styled, { css } from 'styled-components';
import { font, color, mediaMaxWidth } from '../../assets/styles';

export const StyledFooter = styled.footer`
   margin-top: 60px;
   padding-bottom: 20px;
   text-align: center;
   ${font('footer')};
`;

export const FooterLinks = styled.a`
   ${color('darkerGrey')}

   ${mediaMaxWidth('tablet', css`
      text-decoration: underline;
   `)}

   & :hover{
      text-decoration: underline;
   }

   & :active{
      ${color('gold')}
   }
`;

export const FooterPolicy = styled.div`
   margin-bottom: 30px;
`;

export const FooterCreatedInfo = styled.p`
   margin: 10px 0;
   font-style: italic;
   ${color('darkerGrey')};
`;
