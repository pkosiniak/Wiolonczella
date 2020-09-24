import React from 'react';
import styled from 'styled-components';

interface GridProps {
   isDisplayed?: boolean;
}

export const Grid = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Row = styled.div`
   justify-content: space-between;
   display: flex;
   margin: 4px 0;
`;

export const Col = styled.span<GridProps>`
   display: ${({isDisplayed: display = true}) => display ? 'flex' : 'none'};
   flex-direction: column;
   margin: 0 8px;
   flex-grow: 1;
`;

export const Layout: React.FC = () => (
   <>
      <Grid>
         <Row>
            <Col>
               Row 1 Column 1
            </Col>
            <Col>
               Row 1 Column 2
            <br />
               Row 1 Column 2
            </Col>
         </Row>
         <Row>
            <Col>
               Row 2 Column 1
            </Col>
         </Row>
         <Row>
            <Col>
               Row 2 Column 1
            </Col>
         </Row>
      </Grid>

      <hr/>
      <Row>
         <Col>
            Row 1 Column 1
         </Col>
         <Col>
            Row 1 Column 2
            <br />
            Row 1 Column 2
         </Col>
      </Row>
   </>
);
