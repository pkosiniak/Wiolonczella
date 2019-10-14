import React from 'react';
import Nav from './modules/Navbar/NavBar';
import Main from './modules/Main/Main';
import Footer from './modules/Footer/Footer';
import Cookies from './modules/Cookies/Cookies';
import Header from './modules/Header/Header';
import './styles/App.scss';

const App: React.FC = () => {
   const policyRef = React.createRef<HTMLElement>();
   return (
      <>
         <Header />
         <Nav />
         <Main policyRef={policyRef} />
         <Footer policyRef={policyRef} />
         <Cookies policyRef={policyRef} />
      </>
   );
};

export default App;
