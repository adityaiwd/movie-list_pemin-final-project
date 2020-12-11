import React from "react";
import Poster from "./components/poster";
import Navigation from "./components/Navigation";
import PopularList from "./layout/PopularList";
import GlobalStyle from './theme/globalStyles';

const App = () => {
  return (
    <div >
    <GlobalStyle />
      <Navigation />
      <div style={{padding:"0 20rem"}}>
        <PopularList />
      </div>
    </div>
  );
};

export default App;
