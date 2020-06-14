import React from 'react';
import Navbar from './NavBar/Navbar'
import {BrowserRouter} from 'react-router-dom'
import MainComponent from './MainComponent'


function App() {
  return (
   <React.Fragment>
     <BrowserRouter>
      <Navbar/>
      <MainComponent/>
     </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
