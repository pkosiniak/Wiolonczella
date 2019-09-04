import styled, { css } from 'styled-components';
import { backgroundColor, mediaMaxWidth } from '../../styles/constants';

export const CookiesBanner = styled.div`
   position: fixed;
   bottom: 0px;
   width: 75%; /* TODO: change it somehow */
   padding: 7px 25%; // TODO: change % to global
   ${backgroundColor('cookies', true)} // TODO: dispose !important

   ${mediaMaxWidth('xDesktop', css`
      /* TODO: change it somehow */
      width: 85%;
      padding-left: 15%;
      padding-right: 15%;
   `)}

   ${mediaMaxWidth('desktop', css`
      /* TODO: change it somehow */
      width: 85%;
      padding-left: 15%;
      padding-right: 15%;
   `)}

   ${mediaMaxWidth('tablet', css`
      /* TODO: change it somehow */
      width: 90%;
      padding-left: 5%;
      padding-right: 5%;
   `)}
`;
