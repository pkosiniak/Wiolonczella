import styled from 'styled-components';

export interface StyledDropdownProps {
   isDropdownOpen: boolean;
   position?: string;
}

export const Wrapper = styled.div``;

export const TriggerWrapper = styled.div``;

export const LayoutWrapper = styled.div<StyledDropdownProps>`
   display: ${({ isDropdownOpen }) => isDropdownOpen ? 'block' : 'none'};
   position: ${({ position = 'absolute' }) => position};
`;

export const DefaultTrigger = styled.span`
   cursor: pointer;
`;

export const DefaultLayout = styled.span`
`;
