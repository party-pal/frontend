import React from 'react';
import './App.css';
import { withFormik } from 'formik';
import Login from './components/login'

function App() {
  return (
    <div className="App">
        <Login />
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => {}
})(App);
 