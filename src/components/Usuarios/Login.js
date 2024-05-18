import React from 'react'

//import { login } from '../../API/UsuariosAPI';
//import imagen from './veterinaria.jpg';
//import swal from 'sweetalert';
//import { useNavigate } from 'react-router-dom';

function Login() {
    //const navegar = useNavigate();

    return (
        //color azul :bg-primary

        <section className="vh-100 d-flex align-items-center" style={{ backgroundImage: 'url(./img/fondo.png)' }}>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg rounded-3">
                        <div className="row g-0">
                            <div className="col-md-5 bg-white p-4 d-flex align-items-center">
                                <img src="/bg.svg" alt="login form" className="img-fluid mx-auto d-block" style={{ maxWidth: '150%', maxHeight: '200%' }} />
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-dark">
                                    <form>
                                        <div className="text-center mb-3">
                                            <img src="./img/logo2.png" alt="Login" className="img-fluid border border-4 border-primary rounded-circle" style={{ maxWidth: '150px' }} />
                                            </div>
                                            <h5 className="fw-normal mb-5">Iniciar Sesión</h5>

                                            <div className="mb-3">
                                                <div className="input-group">
                                                    <span className="input-group-text bg-white"><i className="fas fa-user text-primary"></i></span>
                                                    <input type="text" className="custom-input form-control form-control-lg " name="usuario" placeholder="Usuario" />
                                                </div>
                                            </div>
                                  
                                    <div className="mb-3">
                                            <div className="input-group">
                                                <span className="input-group-text bg-white"><i className="fas fa-lock text-primary"></i></span>
                                                <input type="password" className="form-control form-control-lg" name="clave" placeholder="Contraseña" />
                                            </div>
                                        </div>

                                            <div className="mb-3">
                                                <a href="/Navegador">
                                                    <button className="btn btn-primary btn-lg w-100" type="button">Iniciar Sesión</button>
                                                </a>
                                            </div>
                                        <p className="mb-0 text-center">¿Olvidastes tu cuenta? <a href="/registro" className="text-primary">Recordar Contraseña</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login;