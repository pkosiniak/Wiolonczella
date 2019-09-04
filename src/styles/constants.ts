import Image from '../image/backgroundBaner_wv.jpg';
import { FlattenSimpleInterpolation, css } from 'styled-components';
// import { css } from 'styled-components';

export const imgSrc = () => `url(${Image})`;

export type DeviceType = 'xDesktop' | 'desktop' | 'tablet' | 'mobile';

export const Width = {
   xDesktop: 1440,
   desktop: 1050,
   tablet: 720,
   mobile: 480,
};

export interface IDevice {
   device: {
      name: string;
      width: number;
   };
}

export const Device = {
   xDesktop: {name: 'xDesktop', width: Width.xDesktop},
   desktop: { name: 'desktop', width: Width.desktop },
   tablet: { name: 'tablet', width: Width.tablet },
   mobile: { name: 'mobile', width: Width.mobile },
};

export const mediaMaxWidth = (width: number | DeviceType, body: string | FlattenSimpleInterpolation) =>
   `
   @media (max-width: ${typeof width === 'number' ? width : Width[width]}px) {
      ${body};
   };
`;

export type FontTypes = 'footer';

export const setFont = (size: number, lineHeight?: number, fontStyle?: string) => css`
   font-size: ${size}px;
   ${lineHeight && css`line-height: ${lineHeight}px;`}
   ${fontStyle && css`font-style:${fontStyle};`}
`;

const fonts = {
   footer: setFont(12, 20),
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
   gray: '#323232',
   lightGray: '#505050',
   lighterGray: '#646464',
   cookies: '#cccc',
   light: '#ececec',
   white: '#fff',
   gold: '#ce9c12',
   ninja: '#fafaf0', // back
   lightGreen: '#6bff60',
   coral: '#ff7a59',
};

export type ColorType = 'black'
   | 'blackTransparent'
   | 'overlay'
   | 'dark'
   | 'lightGray'
   | 'lighterGray'
   | 'cookies'
   | 'light'
   | 'white'
   | 'gold'
   | 'ninja'
   | 'lightGreen'
   | 'coral';

export const color = (foreColor: ColorType, important?: boolean) => css`
   color: ${colors[foreColor]} ${important && css`!important`};
`;
export const backgroundColor = (backColor: ColorType, important?: boolean) => css`
   background-color: ${colors[backColor]} ${important && css`!important`};
`;

export const Icons = {
   cookies: 'fas fa-cookie-bite',
};
