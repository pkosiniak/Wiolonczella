export interface Rectangle {
   width?: number;
   height?: number;
}

export const defaultIconSize = 32;
export const iconPadding = 5;
export const twicePadding = iconPadding * 2;

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
