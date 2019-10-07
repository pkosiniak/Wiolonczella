import React from 'react';
import Nav from './modules/Navbar/NavBar';
import Main from './modules/Main/Main';
import Footer from './modules/Footer/Footer';
import Cookies from './modules/Cookies/Cookies';
import Header from './modules/Header/Header';
import './styles/App.scss';

const App: React.FC = () => (
      <>
         <Header />
         <Nav />
         <Main />
         <Footer />
         <Cookies />
      </>
   );

export default App;
