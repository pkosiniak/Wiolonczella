import styled, { css } from 'styled-components';
import { font, color, mediaMaxWidth } from '../../assets/styles';

const textStyle = css`
   text-align: center;
   ${font('footer')};
`;

export const StyledFooter = styled.footer`
   margin-top: 60px;
   padding-bottom: 20px;
`;

export const TextWrapper = styled.div`
   ${textStyle}
`;

export const LinkWrapper = styled.span`
   display: inline-block;
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
   ${textStyle}
`;

export const P = styled.p`
   margin: 10px 0;
   font-style: italic;
   ${color('darkerGrey')};
`;
