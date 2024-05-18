import React, { useState } from 'react';

import Table from './Table';
import Form from './Form';
//import Navegador from '../Navegador';

function Template() {
    const [mostrarLista, setMostrarLista] = useState(true);
    
    const verLista = () => {
        setMostrarLista(!mostrarLista);
    }

    return (
        
            
        <div style={{ backgroundImage: 'url(./img/fondo.png)', minHeight: '100vh' }}>
            
            <div className="container mt-2">
                
                <div className="d-flex justify-content-between mb-2">
                    
                    <button className="btn btn-success me-2" onClick={verLista}>
                        <i className={mostrarLista ? "fas fa-plus" : "fas fa-list-alt"}></i> {/* Icono cambiará dependiendo de mostrarLista */}
                    </button>
                    <button className="btn btn-primary" onClick={() => window.history.back()}>
                        <i className="fas fa-arrow-left"></i> Volver
                    </button>
                </div>
                <div className="bg-primary bg-gradient p-8 rounded">
                    
                    {mostrarLista ? (
                        <Table />
                    ) : (
                        <Form />
                    )}
                
            </div>
        </div>
        </div>
    );
}

export default Template;