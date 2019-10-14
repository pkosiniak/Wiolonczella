import React from 'react';
import styled, { keyframes } from 'styled-components';
import { DownloadData } from '../../../../components/Main.components/data/Main.content';
import { Grid, Col, Row } from '../../../../components/Grid';
import { mediaTo, color, font, backgroundColor } from '../../../../assets/styles';
import Styled from '../../../../components/Styles';

const data = DownloadData;

export const Wrapper = Styled.section;
export const H3 = Styled.h3;

export const From = styled.form`
   display: flex;
   justify-content: center;
   flex-grow: 1;
`;

export const StyledGrid = styled(Grid)`
   max-width: 400px;
`;

export const StyledRow = styled(Row)`
   margin-top: 0px;
`;

export const ColButton = styled(Col)`
   flex-direction: column;
   align-self: flex-end;
`;

const ClickEvent = keyframes`
   0% {
      ${backgroundColor('darkerGrey')}
   }
   100% {
      ${backgroundColor('grey')}
   }
`;

export const Button = styled.button`
   ${backgroundColor('gold')}
   border: none;
   color: white;
   ${font(20, 28)};
   text-decoration: none;
   padding: 17px 16px;
   margin-top: auto;
   outline: none;
   transition: 0.3s;
   cursor: pointer;
   max-width: 280px;

   ${mediaTo('sTablet')} {
      ${font(24)};
      padding: 20px 16px;
   }

   &:hover {
      ${backgroundColor('darkerGrey')}
   }

   &:active {
      animation-name: ${ClickEvent};
      animation-duration: 0.4s;
      animation-fill-mode: both;
   }
`;
export const DownloadButton = <Button>{data.ButtonText}</Button>;

export const CheckboxLabel = styled.span`
   ${font('downloadRodoLabel')}
`;

const RequiredStar = styled.span`
   ${color('red')}
`;
export const InputRequiredStar = <RequiredStar children="*" />;

interface ErrorInputProps { isDisplayed: boolean; }
export const ErrorInput = styled.div<ErrorInputProps>`
   display: ${({ isDisplayed }) => isDisplayed ? 'block' : 'none'};
   ${color('red')}
   ${font('downloadLabel')}
   letter-spacing: 1px;
   padding-left: 2px;
`;

export const TextInput = styled.input`
   box-sizing: border-box;
   padding: 5px;
   max-width: 280px;
   ${font(14)};
   ${mediaTo('tablet')} {
      ${font(16)};
   }
   ${mediaTo('mobile')} {
      ${font(18)};
   }
`;

export const TextInputLabel = styled.label`
   ${font('downloadLabel')}
   font-family: Lato;
   letter-spacing: 1px;
   ${color('darkerGrey')}
`;
