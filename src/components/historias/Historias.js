import React, { useState, useEffect } from 'react'
import Navegador from '../generales/Navegador';
import TableHistorias from './TableHistorias';
import FormHistorias from './FormHistorias';
//import SearchForm from './SearchForm';
import { getListarHistorias, agregarHistoria, actualizarHistoria, eliminarHistoria } from '../../API/HistoriasApi';
import Swal from 'sweetalert2'
//import { useNavigate } from 'react-router-dom';

import Footer from '../generales/Footer'

function Historias(props) {
  const { usuarioActivo } = props;

  const [historias, setHistorias] = useState([]);
  const [historia, setHistoria] = useState(null);
  const [historiasFiltro, sethistoriasFiltro] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(true);
  //es para la busqueda
  //const [searchType, setSearchType] = useState("documento");
  //const [query, setQuery] = useState("");

  useEffect(() => {
    listar();
  }, []);

  const listar = () => {
    getListarHistorias()
      .then(data => { setHistorias(data) })
      .catch(err => console.log(err));
  };

  if (historias.length === 0)
    listar();

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
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, guardarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(historia._id);
        if (!historia._id) {
          agregarHistoria(historia)
            .then(() => listar())
            .catch(err => console.log(err));
        } else {
          const respuesta = actualizarHistoria(historia);
          console.log(respuesta);
          actualizarHistoria(historia)
            .then(() => listar())
            .catch(err => console.log(err));
        };
        Swal.fire(
          '¡Guardado!',
          'El registro ha sido guardado.',
          'success'
        );
        setMostrarLista(true);
      }
    }).catch(err => console.log(err));
  }

  const eliminar = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarHistoria(id)
          .then(data => {
            console.log(data);
            console.log(id);
            if (data.eliminarHistoriadCount === 1) {
              Swal.fire(
                '¡Eliminado!',
                'El registro ha sido eliminado.',
                'success'
              );
              listar();
            }
          })
          .catch(err => console.log(err));
      }
    });
  };

  const ver = (historia) => {
    setHistoria(historia);
    setMostrarLista(false);
  };

  /*const handleSearch = (type, query) => {
    if (type === 'documento') {
      console.log("esta en documento");
      //sethistoriasFsethistoriasFiltroiltro(historias.filter(h => h.paciente.documentoPaciente.includes(query)));
    } else if (type === 'nombre') {
      console.log("esta en nombre");
      //setFilteredHistorias(historias.filter(h => h.paciente.nombresPaciente.toLowerCase().includes(query.toLowerCase())));
    }
  };*/


  /*const permisos = (usuario) => {
    usuarioActivo = usuario;
    console.log(usuarioActivo)
  }*/

  //console.log(mostrarLista);

  return (
    <div style={{ backgroundImage: 'url(/fondo.png)', minHeight: '100vh' }}>
      <div className="container mt-3">
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-success me-3" onClick={verLista}>
            <i className={mostrarLista ? "fas fa-plus" : "fas fa-list-alt"}></i>
          </button>

          {!mostrarLista ? (
            <button className="btn btn-primary ms-0" onClick={verLista}>
              <i className="fas fa-save"></i> Guardar
            </button>
          ) : (
            <>
              {/*<button className="btn btn-success me-2 btn-block">
                <i className="fas fa-plus"></i>
              </button>
              <button className="btn btn-danger me-2 btn-block">
                <i className="fas fa-trash"></i>
              </button>
              <button className="btn btn-primary me-2 btn-block">
                <i className="fas fa-eye"></i>
              </button>
              <button className="btn btn-secondary btn-block">
                <i className="fas fa-save"></i>
              </button>*/}
            </>
          )}

          <button className="btn btn-primary ms-0" onClick={verLista}>
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
            <TableHistorias historias={historias} historiasFiltro={historiasFiltro} onDelete={eliminar} onView={ver} verLista={verLista} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Historias