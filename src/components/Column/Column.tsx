import styled from 'styled-components';
import { mediaTo } from '../../assets/styles';

const Column = styled.div`
   margin: 0 25%;
   ${mediaTo('desktop')} { margin: 0 15% };
   ${mediaTo('tablet')} { margin: 0 10% };
   ${mediaTo('sTablet')} { margin: 0 5% };
   ${mediaTo('mobile')} { margin: 0 1% };
`;

export default Column;
