import { typeOrUndefined, isValid } from './parse';
import { css } from 'styled-components';

export const families = {
   lobster: 'lobster, cursive',
   lato: 'Lato, sans-serif',
   serif: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\', serif',
   monospace: 'consolas, Space Mono, monospace',
   helvetica: 'Helvetica, Arial, sans-serif',
   arial: 'Arial, sans-serif',
   apple: `-apple-system,
   BlinkMacSystemFont,
   'Segoe UI',
   'Roboto',
   'Oxygen',
   'Ubuntu',
   'Cantarell',
   'Fira Sans',
   'Droid Sans',
   'Helvetica Neue',
   sans-serif`,
};

export type FontTypes = 'footer'
   | 'cookies'
   | 'navbar'
   | 'navbarMobile'
   | 'paragraph'
   | 'aboutAuthorMobile'
   | 'opinions'
   | 'downloadLabel'
   | 'downloadRodoLabel'
   | 'downloadButton'
   | 'downloadButtonMobile'
   | 'policyHeader'
   | 'policyHeaderMobile'
   | 'policyParagraph'
   | 'h1'
   | 'h2'
   | 'h3'
   | 'h4'
   | 'h5';

type IFonts = { [key in FontTypes]: Array<number | string> };

const fonts: IFonts = {
   aboutAuthorMobile: [16, 28, families.helvetica],
   cookies: [15, 24, families.apple],
   downloadButton: [20, 28, families.arial],
   downloadButtonMobile: [24, 28, families.arial],
   downloadLabel: [12, 30, families.lato],
   downloadRodoLabel: [16, 28, families.lato],
   footer: [12, 20, families.apple],
   navbar: [16, 24, families.lato],
   navbarMobile: [28, 36, families.lato],
   opinions: [15, 24, families.helvetica],
   policyHeader: [28, 36, families.helvetica],
   policyHeaderMobile: [24, 28, families.helvetica],
   policyParagraph: [16, 24, families.apple],
   paragraph: [18, 30, families.helvetica],
   h1: [60, NaN, families.lobster],
   h2: [28, NaN, families.serif],
   h3: [26, 38, families.lato],
   h4: [22, 28, families.lato],
   h5: [14, 28, families.helvetica],
};

type StandardType = 'normal' | 'initial' | 'inherit' | '';
type FontStyleType = 'italic' | 'oblique';
type FontWeightType = number | 'bold' | 'bolder' | 'lighter';

interface StyleAndWeight {
   style?: FontStyleType | StandardType;
   weight?: FontWeightType | StandardType;
}

interface IFont extends StyleAndWeight {
   lineHeight?: number;
   family?: string;
}

export const setFont = (size: number, props?: IFont) => {
   const fontSize = `font-size: ${size}px;`;
   const styleArray = (() => {
      if (!props) return [];
      const { lineHeight, style, weight, family } = props;
      const lineH = typeOrUndefined(lineHeight, `line-height: ${lineHeight}px;`);
      const fontStyle = typeOrUndefined(style, `font-style: ${style};`);
      const fontWeight = typeOrUndefined(weight,
         `font-weight: ${typeof weight === 'number' ? weight + 'px' : weight};`
      );
      const fontFamily = typeOrUndefined(family, `font-family: ${family};`);
      return [lineH, fontStyle, fontWeight, fontFamily];
   })();
   const fontF = styleArray.pop();
   styleArray.push(fontSize);
   return css`${styleArray.join().replace(/,/g, '')} ${fontF && fontF}`;
};

type StyleOrWeightType = FontStyleType | FontWeightType | StyleAndWeight;

const pickStyleOrWeight = (styleOrWeight?: StyleOrWeightType): StyleAndWeight => {
   const rest: StyleAndWeight = { style: undefined, weight: undefined };
   if (!styleOrWeight) return rest;
   if (typeof styleOrWeight === 'object') return styleOrWeight;
   if (styleOrWeight === 'italic' || styleOrWeight === 'oblique')
      rest.style = styleOrWeight;
   else
      rest.weight = styleOrWeight;
   return rest;
};

export const font = (
   size: FontTypes | number,
   lineHeight?: number | '',
   styleOrWeight?: StyleOrWeightType,
) => {
   const rest = pickStyleOrWeight(styleOrWeight);
   return typeof size === 'number'
      ? setFont(size, { lineHeight: isValid(lineHeight), ...rest })
      : (() => {
         const getFont = fonts[size];
         return setFont(getFont[0] as number, {
            lineHeight: getFont[1] as number,
            family: getFont[2] as string,
            ...rest
         });
      })();
};
