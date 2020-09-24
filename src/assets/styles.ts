import Image from '../image/backgroundBaner_wv.jpg';
import { FlattenSimpleInterpolation, css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { scrollbarWidth } from './helpers';

export const imgSrc = () => `url(${Image})`;

export type DeviceType = 'desktop' | 'tablet' | 'sTablet' | 'mobile';

export const Width = {
   desktop: 1440,
   tablet: 1050,
   sTablet: 855,
   mobile: 480,
};

export interface IDevice {
   name: string;
   width: number;
}

export const Device = {
   desktop: { name: 'desktop', width: Width.desktop },
   tablet: { name: 'tablet', width: Width.tablet },
   sTablet: { name: 'sTablet', width: Width.sTablet },
   mobile: { name: 'mobile', width: Width.mobile },
};

export const mediaMaxWidth = (
   width: number | DeviceType,
   body: string | FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<any>>,
) =>
   `
   @media (max-width: ${typeof width === 'number' ? width : Width[width]}px) {
      ${body};
   };
`;

export const mediaTo = (width: number | DeviceType) => `
   @media (max-width: ${typeof width === 'number' ? width : Width[width]}px)
`;

export const mediaFrom = (width: number | DeviceType) => `
   @media (min-width: ${typeof width === 'number' ? width : Width[width]}px)
`;

export const fullWidthWithoutScrollbar = css`
   box-sizing: border-box;
   padding-right: ${scrollbarWidth}px;
   width: 100vw;
`;

// FONTS
export * from './fonts';

// COLORS
export * from './colors';

export interface NumericPositionProps {
   top: number;
   right?: number;
   bottom?: number;
   left?: number;
}

export class NumericPosition {
   constructor(props?: NumericPositionProps) {
      if (typeof props === 'undefined') return;
      this.noProps = false;
      const { top, right, bottom, left } = props;
      this.top = top;
      this.right = right;
      this.bottom = bottom;
      this.left = left;
   }
   noProps: boolean = true;
   top?: number;
   right?: number;
   bottom?: number;
   left?: number;

   getAsArray = (): number[] | undefined => this.noProps
      ? undefined
      : [
         typeof this.top !== 'undefined' ? this.top : 0,
         typeof this.right !== 'undefined' ? this.right : 0,
         typeof this.bottom !== 'undefined' ? this.bottom : 0,
         typeof this.left !== 'undefined' ? this.left : 0,
      ];

   getAsCssString = () => {
      let cssString: string = '';
      if (typeof this.top === 'undefined') return cssString;
      cssString += ` ${this.top}px`;
      if (typeof this.right === 'undefined') return cssString;
      cssString += ` ${this.right}px`;
      if (typeof this.bottom === 'undefined') return cssString;
      cssString += ` ${this.bottom}px`;
      if (typeof this.left === 'undefined') return cssString;
      cssString += ` ${this.left}px`;
   };

   getAsCssStringFromArray = () => this.noProps
      ? undefined
      : (this.getAsArray() as number[]).join('px ') + 'px';
}
