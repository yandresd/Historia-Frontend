import React, {useState, useEffect} from 'react'

import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Dashboard from './Navegador';

function Home() {
  /* const navegar = useNavigate();
  const [usuarioActivo, setUsuarioActivo] = useState(null)
  
  useEffect(() => {
    setUsuarioActivo(localStorage.getItem("usuarioActivo"));
    if(localStorage.getItem("usuarioActivo") === null)
      navegar("/")
      //navegar("/login")
  }, [navegar, usuarioActivo]) */
  
  return (
    <div style={{ backgroundImage: 'url(#)', minHeight: '100vh' }}>
      
      <div className="container mt-4"> 
        <h1>Bienvenido</h1>
        <h5>hola home</h5>
      </div>
 
    </div>
    
  )
}

export default Home