import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { mediaTo } from '../../assets/styles';

type ColumnProps = string | FlattenSimpleInterpolation;

const xDesktop = (otherStyles?: ColumnProps) => css`
   margin: 0 25%;
   ${otherStyles && otherStyles}
`;
const desktop = (otherStyles?: ColumnProps) => css`
   ${mediaTo('desktop')} {
      margin: 0 15%;
      ${otherStyles && otherStyles}
   };
`;
const tablet = (otherStyles?: ColumnProps) => css`
   ${mediaTo('tablet')} {
      margin: 0 10%;
      ${otherStyles && otherStyles}
   };
`;
const sTablet = (otherStyles?: ColumnProps) => css`
   ${mediaTo('sTablet')} {
      margin: 0 5%;
      ${otherStyles && otherStyles}
   };
`;
const mobile = (otherStyles?: ColumnProps) => css`
   ${mediaTo('mobile')} {
      margin: 0 1%;
      ${otherStyles && otherStyles}
   };
`;

interface ColumnSizeType {
   to: (otherStyles: ColumnProps) => FlattenSimpleInterpolation;
   margin: number;
}

export const ColumnSize: ColumnSizeType[] = [
   { to: xDesktop, margin: 25 },
   { to: desktop, margin: 15 },
   { to: tablet, margin: 10 },
   { to: sTablet, margin: 5 },
   { to: mobile, margin: 1 },
];

export const ColumnStyle = css`
   ${xDesktop()}
   ${desktop()}
   ${tablet()}
   ${sTablet()}
   ${mobile()}
`;

const Column = styled.div`
   ${ColumnStyle}
`;

export const ColumnArticle = styled.article`
   ${ColumnStyle}
`;

export default Column;
