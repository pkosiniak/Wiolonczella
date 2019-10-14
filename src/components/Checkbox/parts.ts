import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles';

const sharedContainerInput = css`
   position: absolute;
   opacity: 0;
   cursor: pointer;
   height: 0;
   width: 0;
`;

const sharedContainerHoverInputToCheckmark = css`
    border-color: #bbb;
    border-style: solid;
    background-color: #e8e8e8;
`;

const sharedContainerInputCheckedToCheckmark = css`
    border-color: #ddd;
    background-color: #f8f8f8;
`;

const sharedContainerInputCheckedHoverToCheckmark = css`
    border-color: #ddd;
    background-color: #f8f8f8;
`;

const sharedContainerCheckmarkAfter = css`
   left: 9px;
   top: -6px;
   width: 7px;
   height: 16px;
   border: solid ${colors.gold};
   border-width: 0 3px 3px 0;
   /* -webkit-transform: rotate(45deg);
   -ms-transform: rotate(45deg); */
   transform: rotate(45deg);
`;

export const CheckMark = styled.span`
   margin-top: 3px;
   position: absolute;
   top: 0;
   left: 0;
   height: 18px;
   width: 18px;
   border-width: 3px;
   border-color: #ddd;
   border-style: solid;
   background-color: #fff;

   &:after {
      content: "";
      position: absolute;
      display: none;
      ${sharedContainerCheckmarkAfter}
   }
`;

export const CheckBoxLabel = styled.label`
   /* container */
   display: block;
   position: relative;
   padding-left: 35px;
   margin-bottom: 12px;
   cursor: pointer;
   font-size: 22px;
   /* -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none; */
   user-select: none;

   ${sharedContainerInput}

   & :hover {
      ${sharedContainerHoverInputToCheckmark}
   }
   ${sharedContainerInputCheckedToCheckmark}
   ${sharedContainerInputCheckedHoverToCheckmark}

   ${sharedContainerCheckmarkAfter}
`;

export const CheckBoxInput = styled.input`
   ${sharedContainerInput}
   &~${CheckMark} {
      ${sharedContainerHoverInputToCheckmark}
   }
   &:checked {
      &~${CheckMark} {
         ${sharedContainerInputCheckedToCheckmark}
      }
      &:hover{
         &~${CheckMark} {
            ${sharedContainerInputCheckedHoverToCheckmark}
            & :after{
               display: block;
            }
         }
      }
   }
`;
