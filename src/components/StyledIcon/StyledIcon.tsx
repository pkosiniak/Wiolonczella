import React from 'react';
import styled from 'styled-components';

export interface StyledIconProps {
   className: string;
}

const StyledIcon: React.FC<StyledIconProps> = ({ className }) => {
   const Icon = styled.i``;
   return <Icon className={className} />;
};

export default StyledIcon;
