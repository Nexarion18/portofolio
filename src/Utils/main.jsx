import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import '../Styles/Style.css'
import Body from '../Components/Body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Body />
  </BrowserRouter>
  </StrictMode>
);
