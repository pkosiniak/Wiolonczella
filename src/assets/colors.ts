import { css } from 'styled-components';

type IColors = { [key in ColorType]: string };

export const colors: IColors = {
   black: '#000',
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

export type ColorType = 'black'
   | 'darkest'
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
