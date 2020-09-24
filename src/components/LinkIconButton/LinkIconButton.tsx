import React from 'react';
import IconButton from '../IconButton/IconButton';
import { IconProps, IconType } from '../Icon/Icon';

export interface LinkButtonProps {
   href: string;
   iconClassName?: string;
   className?: string;
   id?: string;
   icon: IconType;
}

const LinkIconButton: React.FC<LinkButtonProps & Partial<IconProps>> = ({
   href,
   className,
   iconClassName,
   id,
   rectangle,
   square,
   icon
}) => (
      <a href={href} className={className}>
         <IconButton
            className={iconClassName}
            id={id}
            rectangle={rectangle}
            square={square}
            icon={icon}
         />
      </a>
   );
export default LinkIconButton;
