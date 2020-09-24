import styled from 'styled-components';

export const duration: number = 1;

export interface StyledDropdownProps {
   isOpen: boolean;
   position?: string;
}

export const Wrapper = styled.div`
`;

export const TriggerWrapper = styled.div``;

export const RelativeWrapper = styled.div`
   position: relative;
`;

export const LayoutWrapper = styled.div<StyledDropdownProps>`
   display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
   position: ${({ position = 'absolute' }) => position};
   width: max-content;

`;

export const DefaultTrigger = styled.span`
   cursor: pointer;
`;

export const DefaultLayout = styled.span`
`;
