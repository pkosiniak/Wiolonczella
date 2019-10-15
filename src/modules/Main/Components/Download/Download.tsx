import React, { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { DownloadData } from '../../../../assets/data/Main.content';
import { navLinks } from '../../../../assets/data/NavLink.json';
import * as P from './parts';
import Responsive from '../../../../components/Responsive/Responsive';
import { Row, Col } from '../../../../components/Grid';
import RodoCheckBox from './RodoCheckBox';
import InputWrapper from './InputWrapper';
import ErrorMessage from './ErrorMessage';
import { withRouter, RouteComponentProps } from 'react-router';

const nData = navLinks.Download;
const data = DownloadData;

export interface DownloadProps {
   policyRef: React.RefObject<HTMLElement>;
}

interface DownloadState {
   nameInput: string;
   emailInput: string;
   accept: boolean;
   showPolicy: boolean;
   showInputError: boolean;
   errorMessage?: string;
}

type DownloadType = DownloadProps & RouteComponentProps;

class Download extends React.Component<DownloadType, DownloadState> {
   state = {
      nameInput: '',
      emailInput: '',
      accept: false,
      showPolicy: false,
      showInputError: false,
      errorMessage: undefined,
   };

   resetErrorMessage = () => this.setState({ errorMessage: undefined });

   onNameInput = (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.value;
      this.resetErrorMessage();
      this.setState({ showInputError: name.length > 30 });
      if (name.length > 30) return;

      this.setState({ nameInput: name });
   };

   onEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
      const email = event.target.value;
      this.resetErrorMessage();
      this.setState({ emailInput: email });
   };

   onCheckBoxChange = () => {
      this.resetErrorMessage();
      this.setState({ accept: !this.state.accept });
   };

   onPolicyRefClick = (event: MouseEvent) => {
      event.stopPropagation();
      const { policyRef } = this.props;
      if (policyRef.current && policyRef.current.click())
         this.setState({ accept: !this.state.accept });
   };

   onSubmitEvent = (event: FormEvent<HTMLFormElement>) => {
      const { nameInput, emailInput, accept } = this.state;
      const { match } = this.props;

      event.preventDefault();
      this.resetErrorMessage();
      const json = JSON.stringify({
         name: nameInput,
         email: emailInput,
         timeStamp: Date.now().toFixed()
      });
      axios.post(`${match.url}/.server/api.php`, json, { responseType: 'blob' }
      ).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute(
            'download',
            'Wszystko kojarzy się z wiolonczelą - fragment.pdf'
         );
         document.body.appendChild(link);
         link.click();
         this.setState({ nameInput: '' });
         this.setState({ emailInput: '' });
         this.setState({ accept: !accept });
         document.body.removeChild(link);
      },
         (reason) => {
            // tslint:disable-next-line: no-console
            console.error('error reason: ', reason);
            this.setState({ errorMessage: 'Server error' });
         }
         // tslint:disable-next-line: no-console
      ).catch((e) => console.error(e));
   };

   render() {
      const {
         accept,
         nameInput,
         emailInput,
         showInputError,
         errorMessage,
      } = this.state;
      return (
         <P.Wrapper className="divDownload">
            <P.H3 className="divDownload" id={nData.address}>
               {data.Header}
            </P.H3>
            <P.From onSubmit={this.onSubmitEvent}>
               <Responsive>
                  {({ lessThenOrEqualTo, greaterThenOrEqualTo }) => (
                     <P.StyledGrid>
                        <Row>
                           <Col isDisplayed={greaterThenOrEqualTo('tablet')}>
                              {P.DownloadButton}
                           </Col>
                           <Col>
                              <InputWrapper
                                 nameInput={nameInput}
                                 onNameInput={this.onNameInput}
                                 emailInput={emailInput}
                                 onEmailInput={this.onEmailInput}
                              />
                           </Col>
                        </Row>
                        <Row>
                           <RodoCheckBox
                              checked={accept}
                              onCheckBoxChange={this.onCheckBoxChange}
                              onPolicyRefClick={this.onPolicyRefClick}
                           />
                        </Row>
                        <Row>
                           <Col>
                              {lessThenOrEqualTo('sTablet') && P.DownloadButton}
                              <ErrorMessage
                                 isDisplayed
                                 nameToLong={showInputError}
                                 errorMessage={errorMessage}
                              />
                           </Col>
                        </Row>
                     </P.StyledGrid>
                  )}
               </Responsive>
            </P.From>
         </P.Wrapper>
      );
   }
}

const withRouteDownload = withRouter(Download);

export default withRouteDownload;
