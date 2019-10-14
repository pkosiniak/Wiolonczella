import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { backgroundColor, colors } from '../../assets/styles';

export type IconType = FunctionComponent<React.SVGProps<SVGSVGElement>>;

export interface Rectangle {
   width?: number;
   height?: number;
}

export interface StyleIconProps {
   rectangle?: Rectangle;
   square?: number;
   noDefaultStyle?: boolean;
   noPadding?: boolean;
}

export interface IconProps extends StyleIconProps {
   className?: string;
   id?: string;
   icon: IconType;
}

export const defaultIconSize = 32;
export const iconPadding = 5;
const twicePadding = iconPadding * 2;

export const setWidth = (square?: number, rectangle?: Rectangle) =>
   (square && square) || (rectangle && rectangle.width);

export const setHeight = (square?: number, rectangle?: Rectangle) =>
   (square && square) || (rectangle && rectangle.height);

export const setWidthWithPadding = (square?: number, rectangle?: Rectangle) =>
   (square && square + twicePadding)
   || (rectangle && rectangle.width && rectangle.width + twicePadding);

export const setHeightWithPadding = (square?: number, rectangle?: Rectangle) =>
   (square && square + twicePadding)
   || (rectangle && rectangle.height && rectangle.height + twicePadding);

export const Wrapper = styled.span<StyleIconProps>`
   ${({ square, rectangle, noDefaultStyle, noPadding }) => !noDefaultStyle && !noPadding ? css`
         width: ${setWidthWithPadding(square, rectangle)}px;
         height: ${setHeightWithPadding(square, rectangle)}px;
      ` : css`
         width: ${setWidth(square, rectangle)}px;
         height: ${setHeight(square, rectangle)}px;
      `}
   box-sizing: border-box;
`;

const Icon: React.FC<IconProps> = ({
   className,
   id,
   rectangle,
   square,
   noDefaultStyle = false,
   noPadding = false,
   icon: ChildIcon,
}) => {
   const width = setWidth(square, rectangle) || defaultIconSize;
   const height = setHeight(square, rectangle) || defaultIconSize;
   const StyledIcon = styled(ChildIcon)`
      ${!noDefaultStyle && css`
         ${backgroundColor('transparent')}
         fill: ${colors.darkGrey};
         padding: ${iconPadding}px;
      `}
   `;
   return (
      <Wrapper
         noDefaultStyle={noDefaultStyle}
         noPadding={noPadding}
         square={square}
         rectangle={rectangle}
      >
         <StyledIcon
            id={id}
            className={className}
            width={width}
            height={height}
         />
      </Wrapper>
   );
};

export default Icon;
