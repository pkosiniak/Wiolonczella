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

export const setFont = (size: number, lineHeight?: number, fontStyle?: string) => css`
   font-size: ${size}px;
   ${lineHeight && css`line-height: ${lineHeight}px;`}
   ${fontStyle && css`font-style:${fontStyle};`}
`;

export type FontTypes = 'footer' | 'cookies' | 'navbar' | 'navbarMobile' | 'description' | 'opinions';

type IFonts = { [key in FontTypes]: FlattenSimpleInterpolation };

const fonts: IFonts = {
   footer: setFont(12, 20),
   cookies: setFont(15, 24),
   navbar: setFont(16, 24),
   navbarMobile: setFont(28, 36),
   description: setFont(18, 30),
   opinions: setFont(15, 24),
};

export const font = (fontSize: FontTypes | number, lineHeight?: number, fontStyle?: string) =>
   typeof fontSize === 'number'
      ? setFont(fontSize, lineHeight, fontStyle)
      : fonts[fontSize];

type IColors = { [key in ColorType]: string };

export const colors: IColors = {
   overlay: '#000c',
   darkest: '#0f0f0f',
   darkestTransparent: '#0f0f0fb3',
   darker: '#1e1e1e',
   dark: '#323232',
   darkTransparent: '#32323288',
   darkerGrey: '#505050',
   darkGrey: '#646464',
   grey: '#808080',
   lightGrey: '#999',
   cookies: '#cccc',
   light: '#ececec',
   lighter: '#f8f8f8',
   white: '#fff',
   gold: '#ce9c12',
   ninja: '#fafaf0', // back
   lightGreen: '#6bff60',
   coral: '#ff7a59',
   transparent: '#0000',
};

interface OtherColor {
   other: string;
}

export type ColorType = 'darkest'
   | 'darkestTransparent'
   | 'overlay'
   | 'darker'
   | 'dark'
   | 'darkTransparent'
   | 'darkerGrey'
   | 'darkGrey'
   | 'grey'
   | 'lightGrey'
   | 'cookies'
   | 'light'
   | 'lighter'
   | 'white'
   | 'gold'
   | 'ninja'
   | 'lightGreen'
   | 'coral'
   | 'transparent';

export const color = (foreColor: ColorType | OtherColor, important?: boolean) => css`
   color: ${typeof foreColor === 'object'
      ? foreColor.other
      : colors[foreColor]
   } ${important && css`!important`};
`;
export const backgroundColor = (backColor: ColorType | OtherColor, important?: boolean) => css`
   background-color: ${typeof backColor === 'object'
      ? backColor.other
      : colors[backColor]
   } ${important && css`!important`};
`;

export const fullWidthWithoutScrollbar = css`
   box-sizing: border-box;
   padding: ${scrollbarWidth};
   width: 100vw;
`;
