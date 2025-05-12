
import React from 'react';
import '../src/pages/CSS.css'
import { AuthPage } from './pages/Auth/AuthPage';
import {useRoutes} from 'react-router-dom'
import {routes} from '.././routes.jsx'
import { Toaster } from 'react-hot-toast';
function App() {
  const elements = useRoutes(routes)
  return (
    <>
      {elements}
      <Toaster position='bottom-right' reverseOrder={false}/>
    </>
  );
}

export default App;

