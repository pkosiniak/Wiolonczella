import React from 'react';
import Nav from './components/Navbar/Nav';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import Cookies from './components/Coockies/Cookies';
import Header from './components/Header/Header';
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
