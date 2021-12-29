import React from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router}  from "react-router-dom";
import {OuterLayout} from "./styles/Layout";
import CardSection from './Components/CardSection';
import styled from 'styled-components';
import ChartSection from './Components/ChartSection';
import MessagingSection from './Components/MessagingSection';
import PaymentSection from './Components/PaymentSection';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection  />
          <ChartSection />
          <MessagingSection />
          <PaymentSection />
        </MainStyled>
      </OuterLayout>
      <Footer />
      
    </div>
    </Router>
  )
}

const MainStyled = styled.main`

`;

export default App
