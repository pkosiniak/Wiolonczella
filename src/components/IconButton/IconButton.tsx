import React, { ReactNode } from 'react';
import Icon, { IconProps, setHeightWithPadding, setWidthWithPadding } from '../Icon/Icon';
import * as P from './parts';

export interface IconButtonProps {
   onClick?: () => void;
   icon: ReactNode;
}

const IconButton: React.FC<IconButtonProps & IconProps> = ({ square, rectangle, onClick, ...props }) => (
   <P.Button
      height={setHeightWithPadding(square, rectangle)}
      width={setWidthWithPadding(square, rectangle)}
      onClick={onClick}
   >
      <Icon square={square} rectangle={rectangle} {...props} />
   </P.Button>
);

export default IconButton;
