import Image from '../image/backgroundBaner_wv.jpg';
import { FlattenSimpleInterpolation, css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { scrollbarWidth } from './helpers';
import { typeOrUndefined, isValid } from './parse';

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

// FONTS
export type FontTypes = 'footer'
   | 'cookies'
   | 'navbar'
   | 'navbarMobile'
   | 'paragraph'
   | 'aboutAuthorMobile'
   | 'opinions'
   | 'downloadLabel'
   | 'downloadRodoLabel'
   | 'policyParagraph'
   | 'h3'
   | 'h4'
   | 'h5';

type IFonts = { [key in FontTypes]: number[] };

const fonts: IFonts = {
   footer: [12, 20],
   cookies: [15, 24],
   navbar: [16, 24],
   navbarMobile: [28, 36],
   paragraph: [18, 30],
   aboutAuthorMobile: [16, 28],
   opinions: [15, 24],
   downloadLabel: [12, 30],
   downloadRodoLabel: [16, 28],
   policyParagraph: [16, 24],
   h3: [26, 38],
   h4: [22, 28],
   h5: [14, 28],
};

interface IFont {
   lineHeight?: number;
   style?: string;
   weight?: string | number;
}

export const setFont = (size: number, props?: IFont) => {
   const fontSize = `font-size: ${size}px;`;
   const styleArray = (() => {
      if (!props) return [];
      const { lineHeight, style, weight } = props;
      const lineH = typeOrUndefined(lineHeight, `line-height: ${lineHeight}px;`);
      const fontStyle = typeOrUndefined(style, `font-style: ${style};`);
      const fontWeight = typeOrUndefined(weight,
         `font-weight: ${typeof weight === 'number' ? weight + 'px' : weight};`
      );
      return [lineH, fontStyle, fontWeight];
   })();
   styleArray.push(fontSize);
   return css`${styleArray.join().replace(/,/g, '')}`;
};

type StandardType = 'normal' | 'initial' | 'inherit' | '';
type FontStyleType =  'italic' | 'oblique' | StandardType;
type FontWeightType = number | 'bold' | 'bolder' | 'lighter' | StandardType ;

export const font = (
   size: FontTypes | number,
   lineHeight?: number | '',
   style?: FontStyleType,
   weight?: FontWeightType
) => {
   const rest = { style, weight };
   return typeof size === 'number'
      ? setFont(size, { lineHeight: isValid(lineHeight), ...rest })
      : setFont(fonts[size][0], { lineHeight: fonts[size][1], ...rest });
};

// COLORS
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
   red: '#f00',
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
   | 'red'
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

export const fill = (fillColor: ColorType | OtherColor, important: boolean = true) => css`
fill: ${typeof fillColor === 'object'
      ? fillColor.other
      : colors[fillColor]
   } ${important && css`!important`};
`;

export const fullWidthWithoutScrollbar = css`
   box-sizing: border-box;
   padding-right: ${scrollbarWidth}px;
   width: 100vw;
`;
