import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import { App } from './components/App';

const AppClient = () => (
  <div >Test</div>
);
/*


<Router>
    <App />
  </Router>

  */
window.onload = () => {
  render(<AppClient />, document.getElementById('main'));
};