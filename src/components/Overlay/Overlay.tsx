import styled from 'styled-components';
import { backgroundColor } from '../../assets/styles';

export enum OverlayLevel {
   low = 1,
   mid = 900,
   hi = 1900,
}

export const Overlay = styled.div<{ level?: OverlayLevel }>`
   z-index: ${({ level = OverlayLevel.mid }) => level};
   position: fixed;
   top: 0px;
   left: 0px;
   width: 100vw;
   height: 100vh;
   ${backgroundColor('overlay')}
`;
