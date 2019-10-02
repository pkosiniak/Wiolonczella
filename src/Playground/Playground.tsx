import React from 'react';
import Components, { Modules } from '../Demo';
// tslint:disable-next-line: no-import-side-effect
import './playground.scss';
import Column from '../components/Column/Column';
import * as P from './parts';
import { ShowButtonGroup } from './ShowButtonsGroup';
import { parseBool } from './helpers';

interface DemoProps {
   demoElement: JSX.Element;
   showDemo: boolean;
}

const DemoComponent: React.FC<DemoProps> = ({ demoElement, showDemo }) => (<>{showDemo && demoElement}</>);

const MemoDemoComponent = React.memo(DemoComponent);

interface DemosState {
   showComponents: boolean[];
   showModules: boolean[];
   useColumn: boolean;
   showAllButtons: boolean;
}

class Playground extends React.Component<{}, DemosState> {
   constructor(props: {}) {
      super(props);
      Components.forEach((demo, i) => {
         const key = demo.key ? demo.key.toString() : 'Components' + i;
         if (!localStorage.getItem(key))
            localStorage.setItem(key, 'false');
      });
      Modules.forEach((demo, i) => {
         const key = demo.key ? demo.key.toString() : 'Modules' + i;
         if (!localStorage.getItem(key))
            localStorage.setItem(key, 'false');
      });
      const useColumnState = localStorage.getItem('useColumn');
      const showAllButtonsState = localStorage.getItem('showAllButtons');
      this.state = {
         showComponents: Components.map((demo, i) => {
            const key = demo.key ? demo.key.toString() : 'Components' + i;
            return parseBool(localStorage.getItem(key));
         }),
         showModules: Modules.map((demo, i) => {
            const key = demo.key ? demo.key.toString() : 'Modules' + i;
            return parseBool(localStorage.getItem(key));
         }),
         useColumn: useColumnState ? parseBool(useColumnState) : true,
         showAllButtons: showAllButtonsState ? parseBool(showAllButtonsState) : true,
      };
   }

   onColumnButtonClick = () => {
      this.setState({ useColumn: !this.state.useColumn });
      localStorage.setItem('useColumn', (!this.state.useColumn).toString());
   };

   onShowOptionsButtonsClick = () => {
      this.setState({ showAllButtons: !this.state.showAllButtons })
      localStorage.setItem('showAllButtons', (!this.state.showAllButtons).toString());
   };

   calcLength = (arr: boolean[]) => {
      let len = 0;
      arr.forEach((element) => { if (element) len++; });
      return len;
   };

   setShowComponents = (state: boolean[]) => this.setState({ showComponents: state });
   setShowModules = (state: boolean[]) => this.setState({ showModules: state });

   render() {
      const { showComponents, showModules, useColumn, showAllButtons } = this.state;

      const getDemos = Components.map((demo, i) => <MemoDemoComponent key={i} demoElement={demo} showDemo={showComponents[i]} />);
      const getModules = Modules.map((demo, i) => <MemoDemoComponent key={i} demoElement={demo} showDemo={showModules[i]} />);

      return (
         <P.Body>
            {showAllButtons && (
               <P.StyledDemoButtonGroup top={0} >
                  <ShowButtonGroup demos={Modules} name="Modules" showDemos={showModules} setShowDemos={this.setShowModules} />
                  <ShowButtonGroup demos={Components} name="Components" showDemos={showComponents} setShowDemos={this.setShowComponents} />
               </P.StyledDemoButtonGroup>
            )}
            <P.StyledShowButton noWidth bottom={1} isActive={showAllButtons} onClick={this.onShowOptionsButtonsClick}>@</P.StyledShowButton>
            {showAllButtons && <P.StyledShowButton bottom={12} isActive={useColumn} onClick={this.onColumnButtonClick}>Column</P.StyledShowButton>}
            {useColumn
               ? (
                  <Column>
                     {getModules}
                     {getDemos}
                  </Column>
               ) : (
                  <>
                     {getModules}
                     {getDemos}
                  </>
               )
            }
         </P.Body >
      );
   }
}

export default Playground;
