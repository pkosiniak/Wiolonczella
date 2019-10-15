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
