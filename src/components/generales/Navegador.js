import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from './Home';
import Template from './EjemploTemplate/Template';
import Historias from './../historias/Historias';
import Footer from "./Footer";

function Navegador() {
  const [content, setContent] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const navegar = useNavigate();
    const [usuarioActivo, setUsuarioActivo] = useState(null)
    
    useEffect(() => {
      if(localStorage.getItem("usuarioActivo") === null)
        //navegar("/login")
      setUsuarioActivo(localStorage.getItem("usuarioActivo"));
    }, [navegar, usuarioActivo])

  const handleButtonClick = (component, buttonName) => {
      setContent(component);
      setActiveButton(buttonName);
  };
  useEffect(() => {
  
    const toggleButton = document.getElementById("menu-toggle");
    const el = document.getElementById("wrapper");

    if (toggleButton && el) {
      toggleButton.onclick = function () {
        el.classList.toggle("toggled");
      };
    }
  }, []);
/*
const handleCitasClick = () => {
    setContent(<Citas />);
};
*/
/*
const handleSedesClick = () => {
    setContent(<Sedes />);
};
/*
const handleMedicamentosClick = () => {
    setContent(<Medicamentos />);
};
*/
/*
const handleUsuariosClick = () => {
    setContent(<Usuarios />);
};
*/

  return (
    <div className="d-flex" id="wrapper">
      <div className="bg-white" id="sidebar-wrapper">
        <div>
          <a className="navbar-brand" href="/">
            <img src="./img/logo.png" alt="Login" style={{ maxWidth: '180px' }} />
          </a>
        </div>
        <div className="list-group list-group-flush my-3">
        <nav aria-label="breadcrumb" id="my-breadcrumb">
                    <ol className="breadcrumb">
                      
                        <li className="breadcrumb">

                                {activeButton === 'Home' ? 'Home' : null}
                          
                        </li>

                        <li className="breadcrumb-item">
                            
                                {activeButton === 'Historias' ? 'Historias' : null}

                        </li>
                        <li className="breadcrumb">
                            {activeButton === 'Template' ? 'Template' : null}
                        </li>
                    </ol>
                </nav>
                
                <button
                    className="list-group-item  bg-transparent second-text fw-bold custom-list-button1"
                    onClick={() => handleButtonClick(<Home />, 'Home')}
                >
                    <i className="fas fa-home me-2"></i>Home
                </button>

                <button
                    className="list-group-item  bg-transparent second-text fw-bold custom-list-button"
                    onClick={() => handleButtonClick(<Historias />, 'Historias')}
                >
                    <i className="fas fa-file-alt me-2"></i>Historias
                </button>

                <div className="dropdown">
        <button
          className="list-group-item bg-transparent second-text fw-bold custom-list-button2 dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-file-alt me-2"></i>Órdenes
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <button className="dropdown-item" onClick={() => handleButtonClick(<Template />, 'Template 1')}>Órdenes de Medicamentos</button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleButtonClick(<Template />, 'Template 2')}>Template 2</button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleButtonClick(<Template />, 'Template 3')}>Template 3</button>
          </li>
        </ul>
      </div>
               {/* aqui irian los demas botones*/}
                <button
                    className="list-group-item  bg-transparent second-text fw-bold  custom-list-button1"
                    onClick={() => setContent(null)}
                >
                    <i className="fas fa-power-off me-2"></i>Salir
                </button>
               
            </div>
        </div>

      <div id="page-content-wrapper">
        <header className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-5 mb-lg-0 mx-auto justify-content-center text-center">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Home"><i className="fas fa-life-ring me-2"></i>Soporte</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Mensajes"><i className="fas fa-envelope me-2"></i>Mensajes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Clinica"><i className="fas fa-hospital-symbol me-2"></i>Clínica</a>
                  </li>
                </ul>
                <form className="d-flex me-3">
                  <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                  <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <ul className="navbar-nav">
                  <li className="dropdown nav-item profile-dropdown">
                    <a className="nav-link profile-dropdown-btn" href="/" data-bs-toggle="dropdown">
                      <img src="./img/User.png" alt="User" className="profile-img" />
                      <span className="xp-user-live"></span>
                    </a>
                    <ul className="dropdown-menu small-menu profile-dropdown-list">
                      <li className="profile-dropdown-list-item"><a href="/">
                        <span className="fas fa-user"></span>
                        Perfil
                      </a></li>
                      <li className="profile-dropdown-list-item"><a href="/">
                        <span className="fas fa-cog"></span>
                        Configuracion
                      </a></li>
                      <li className="profile-dropdown-list-item"><a href="/">
                        <span className="fas fa-sign-out-alt"></span>
                        Salir
                      </a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <div className="container-fluid px-3">
          <div className="row g-2 my-3">
            <div className="user-info-container p-4 bg-white shadow-sm d-flex justify-content-between align-items-center rounded flex-grow-1">
              <i className="fas fa-user user-icon fs-1 primary-text border rounded-full secondary-bg p-4" id="izquierda"></i>
              <div className="user-details">
                <h3 className="fs-2 mb-0">Yahir Andres Duran Cristancho</h3>
                <p className="fs-5 mb-1">Rol: Medico</p>
                <p className="fs-5 mb-1">Cargo: Medico General</p>
              </div>
              <div id="izquierda1">
                <a className="navbar-brand" href="/">
                  <img src="./img/logo.png" alt="Login" style={{ maxWidth: '120px' }} />
                  <p>Direccion: Unidades Tecnologicas de santander</p>
                </a>
              </div>
            </div>
            <div className="col-md-40 d-flex flex-column align-items-center">
              
              {content}
              
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navegador;