import React, { useState, useEffect } from 'react'
import Navegador from '../generales/Navegador';
import TableHistorias from './TableHistorias';
import FormHistorias from './FormHistorias';
import { getListarHistorias, agregarHistoria, actualizarHistoria, eliminarHistoria } from '../../API/HistoriasApi';
//import { useNavigate } from 'react-router-dom';

import Footer from '../generales/Footer'

function Historias(props) {
  const { usuarioActivo } = props;

  const [historias, setHistorias] = useState([]);
  const [historia, setHistoria] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(true);

  useEffect(() => {
    listar();
  }, []);

  const listar = () => {
    getListarHistorias()
      .then(data => {
        //console.log(data);
        setHistorias(data);
      })
      .catch(err => console.log(err));
  };

  const verLista = () => {
    if (mostrarLista) {
      setMostrarLista(false);
    } else {
      setHistoria({
        _id: null,
        codigoHistoria: "",
        motivo: "",
        antecendentes: "",
        temperatura: "",
        peso: "",
        altura: "",
        presionAlterial: "",
        diagnostico: "",
        valoracion: "",
        tipoConsulta: "",
        paciente: {
          idPaciente: "",
          nombresPaciente: "",
          apellidosPaciente: "",
          direccionPaciente: "",
          telefonoPaciente: "",
          correoPaciente: "",
          tipoDocumentoPaciente: "",
          documentoPaciente: "",
          estadoPaciente: ""
        },
        medico: {
          idMedico: "",
          nombresMedico: "",
          apellidosMedico: "",
          correoMedico: "",
          tipoDocumentoMedico: "",
          documentoMedico: "",
          estadoMedico: "",
          especialidadMedico: {
            idEspecialidadMedico: "",
            nombreEspecialidadMedico: "",
            codigoEspecialidadMedico: ""
          },
        },
        cita: {
          idCita: "",
          tipoCita: "",
          estadoCita: "",
          fechaAgenda: "",
          horaAgenda: ""
        },
        OrdenExamenes: {
          idOrdenExamenes: "",
          vigenciaExamenes: "",
          resultadosExamenes: "",
          Examenes: [
            {
              idExamenes: "",
              nombreExamen: "",
              odigoExamen: "",
              descripcionExamen: ""
            }
          ]
        },
        OrdenMedicamentos: {
          idOrdenMedicamentos: "",
          estadoMedicamentos: "",
          descripcionMedicamentos: "",
          dosisMedicamentos: "",
          cantidadMedicamentos: "",
          entregasMedicamentos: "",
          indicacionesMedicamentos: "",
          vigenciaMedicamentos: "",
          medicamentos: [
            {
              idMedicamentos: "",
              nombreMedicamentos: "",
              descripcionMedicamentos: "",
              codigoMedicamentos: ""
            }
          ]
        },
        OrdenProcedimientos: {
          idOrdenProcedimientos: "",
          nombreProcedimientos: "",
          codigoProcedimientos: "",
          descripcionProcedimientos: "",
          vigenciaProcedimientos: "",
          resultadosProcedimientos: ""
        },
        OrdenRemisiones: {
          idOrdenRemisiones: "",
          nombreRemisiones: "",
          codigoRemisiones: "",
          motivoRemisiones: "",
          especialidadRemisiones: {
            idEspecialidadRemisiones: "",
            nombreEspecialidadRemisiones: "",
            codigoEspecialidadRemisiones: ""
          }
        },
        OrdenIncapacidades: {
          idOrdenIncapacidades: "",
          descripcionIncapacidades: "",
          fechaInicioIncapacidades: "",
          fechaFinIncapacidades: ""
        },
      });

      setMostrarLista(true);
    }
  };


  const guardar = (historia) => {
    if (!historia._id) {
      agregarHistoria(historia)
        .then(() => listar())
        .catch(err => console.log(err));
    } else {
      actualizarHistoria(historia)
        .then(() => listar())
        .catch(err => console.log(err));
    }
    setMostrarLista(true);
  };

  const eliminar = (id) => {
    eliminarHistoria(id)
      .then(data => {
        if (data.eliminarHistoriadCount === 1) listar();
      })
      .catch(err => console.log(err));
  };

  const ver = (historia) => {
    setHistoria(historia);
    setMostrarLista(false);
  };

  /*const permisos = (usuario) => {
    usuarioActivo = usuario;
    console.log(usuarioActivo)
  }*/

  console.log(mostrarLista);

  return (
    <div style={{ backgroundImage: 'url(/fondo.png)', minHeight: '100vh' }}>
      <div className="container mt-3">
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-success me-3" onClick={verLista}>
            <i className={mostrarLista ? "fas fa-plus" : "fas fa-list-alt"}></i> {/* Icono cambiará dependiendo de mostrarLista */}
          </button>
          <button className="btn btn-primary ms-0">
            <i className="fas fa-arrow-left"></i> Volver
          </button>
        </div>

        <div className="bg-primary bg-gradient p-8 rounded">
          {!mostrarLista && (
            <div>
              <FormHistorias onSave={guardar} historia={historia} />
            </div>
          )}
          {mostrarLista && (
            <TableHistorias historias={historias} oneliminarHistoria={eliminar} onView={ver} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Historias