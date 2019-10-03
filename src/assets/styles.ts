import Image from '../image/backgroundBaner_wv.jpg';
import { FlattenSimpleInterpolation, css, FlattenInterpolation, ThemeProps } from 'styled-components';

export const imgSrc = () => `url(${Image})`;

export type DeviceType = 'desktop' | 'tablet' | 'sTablet' |  'mobile';

export const Width = {
   desktop: 1440,
   tablet: 1050,
   sTablet: 780,
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

export const setFont = (size: number, lineHeight?: number, fontStyle?: string) => css`
   font-size: ${size}px;
   ${lineHeight && css`line-height: ${lineHeight}px;`}
   ${fontStyle && css`font-style:${fontStyle};`}
`;

export type FontTypes = 'footer' | 'cookies' | 'navbar' | 'navbarMobile';

const fonts = {
   footer: setFont(12, 20),
   cookies: setFont(15, 24),
   navbar: setFont(16, 24),
   navbarMobile: setFont(28, 36),
};

export const font = (fontSize: FontTypes | number, lineHeight?: number, fontStyle?: string) =>
   typeof fontSize === 'number'
      ? setFont(fontSize, lineHeight, fontStyle)
      : fonts[fontSize];

export const colors = {
   black: '#0f0f0f',
   blackTransparent: '#0f0f0fb3',
   overlay: '#000c',
   dark: '#1e1e1e',
   darkGray: '#323232',
   darkGrayTransparent: '#32323288',
   lightGray: '#505050',
   lighterGray: '#646464',
   gray: '#808080',
   cookies: '#cccc',
   light: '#ececec',
   white: '#fff',
   gold: '#ce9c12',
   ninja: '#fafaf0', // back
   lightGreen: '#6bff60',
   coral: '#ff7a59',
   transparent: '#0000',
};

export type ColorType = 'black'
   | 'blackTransparent'
   | 'overlay'
   | 'dark'
   | 'darkGray'
   | 'darkGrayTransparent'
   | 'lightGray'
   | 'lighterGray'
   | 'gray'
   | 'cookies'
   | 'light'
   | 'white'
   | 'gold'
   | 'ninja'
   | 'lightGreen'
   | 'coral'
   | 'transparent';

export const color = (foreColor: ColorType, important?: boolean) => css`
   color: ${colors[foreColor]} ${important && css`!important`};
`;
export const backgroundColor = (backColor: ColorType, important?: boolean) => css`
   background-color: ${colors[backColor]} ${important && css`!important`};
`;
