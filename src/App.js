import React from 'react';
import Home from './components/Home/Home';
import RequestContainer from './components/Requests/RequestContainer'
import './styles.sass';



import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />  
      <Route exact path="/requests" component={RequestContainer} />  
    </div>
  </BrowserRouter>
  );
}

export default App;
