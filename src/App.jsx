import React, { Fragment, useContext } from "react"
import Header from "./components/Header";
import Items from "./components/Items";
import Wrapper from "./components/Wrapper";
import Store from "./Store"
import './styles/style.scss';

const App = (props) => {

  return (
    <Wrapper>
      <Header />
      <Items />
    </Wrapper>
  )
}

export default App
