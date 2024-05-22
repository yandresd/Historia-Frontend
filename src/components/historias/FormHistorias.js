import { logRoles } from '@testing-library/react';
import React, { useState, useEffect } from 'react'

function FormHistorias(props) {

    const { onSave, historia } = props;

    const [showExamenes, setShowExamenes] = useState(false);
    const [showMedicamentos, setShowMedicamentos] = useState(null);

    const [formData, setFormData,] = useState({
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
        }
    });
    
    useEffect(() => {
        if (historia) {
            setFormData(historia);
        }
    }, [historia]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        if (keys.length === 1) {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else {
            setFormData(prevState => {
                let obj = { ...prevState };
                keys.reduce((o, key, idx) => {
                    if (idx === keys.length - 1) {
                        o[key] = value;
                    } else {
                        o[key] = o[key] || {};
                    }
                    return o[key];
                }, obj);
                return obj;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    const toggleExamenesDato = () => {
        setShowExamenes(prevState => !prevState);
    };

    const toggleMedicamentos = () => {
        setShowMedicamentos(prevState => !prevState);
    };

    //Convertir fechas incapacidades
    const fechaInicioDate = new Date(formData.OrdenIncapacidades.fechaInicioIncapacidades);
    const fechaFinDate = new Date(formData.OrdenIncapacidades.fechaFinIncapacidades);

    const fechaInicioIncapacidades = fechaInicioDate.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const fechaFinIncapacidades = fechaFinDate.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    //Convertir fechas citas
    const fechaCitaDate = new Date(formData.cita.fechaAgenda);

    const fechaCita = fechaCitaDate.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    {/*useEffect(() => {
        if (typeof formData.OrdenExamenes === 'object' && formData.OrdenExamenes !== null) {
            if (Array.isArray(formData.OrdenExamenes)) {
                console.log("Si es un Array:");
                setShowOrdenExamenes(false);
            } else {
                console.log("No es un Array:");
                setShowOrdenExamenes(true);
            }
        } else {
            console.log("No es un objeto o es nulo:");
            setShowOrdenExamenes(true);
        }
    }, [formData.OrdenExamenes]);*/}



    return (
        <div>
            <div className="row">
                <div className="col-md-20">
                    <div className="alert alert-primary" role="alert">
                        <div>
                            <label for="codigoHistoria">Código de Historia:</label>
                            <input type="text" name="codigoHistoria" value={formData.codigoHistoria} onChange={handleChange} placeholder="Código Historia" />
                        </div>

                    </div>
                </div>
                {/*INFORMACION PACIENTE------------------------------------------------------------------------------*/}
                <div className="col-md-6">
                    <div className="alert alert-secondary" role="alert">
                        <h3>INFORMACION PACIENTE</h3>
                        <div>
                            <label for="paciente.tipoDocumentoPaciente">Tipo Documento:</label>
                            <input type="text" name="paciente.tipoDocumentoPaciente" value={formData.paciente.tipoDocumentoPaciente} onChange={handleChange} placeholder="Tipo Documento Paciente" />
                        </div>
                        <div>
                            <label for="paciente.documentoPaciente">Documento:</label>
                            <input type="text" name="paciente.documentoPaciente" value={formData.paciente.documentoPaciente} onChange={handleChange} placeholder="Documento Paciente" />
                        </div>
                        <div>
                            <label for="paciente.nombresPaciente">Nombres:</label>
                            <input type="text" name="paciente.nombresPaciente" value={formData.paciente.nombresPaciente} onChange={handleChange} placeholder="Nombres Paciente" />
                        </div>
                        <div>
                            <label for="paciente.apellidosPaciente">Apellidos:</label>
                            <input type="text" name="paciente.apellidosPaciente" value={formData.paciente.apellidosPaciente} onChange={handleChange} placeholder="Apellidos Paciente" />
                        </div>
                        <div>
                            <label for="paciente.direccionPaciente">Direccion:</label>
                            <input type="text" name="paciente.direccionPaciente" value={formData.paciente.direccionPaciente} onChange={handleChange} placeholder="Dirección Paciente" />
                        </div>
                        <div>
                            <label for="paciente.telefonoPaciente">Telefono:</label>
                            <input type="text" name="paciente.telefonoPaciente" value={formData.paciente.telefonoPaciente} onChange={handleChange} placeholder="Teléfono Paciente" />
                        </div>
                        <div>
                            <label for="paciente.correoPaciente">Correo:</label>
                            <input type="text" name="paciente.correoPaciente" value={formData.paciente.correoPaciente} onChange={handleChange} placeholder="Correo Paciente" />
                        </div>
                    </div>
                </div>
                {/*VALORACION------------------------------------------------------------------------------*/}
                <div className="col-md-6">
                    <div className="alert alert-secondary" role="alert">
                        <h3>VALORACION</h3>
                        <div>
                            <label for="peso">Peso:</label>
                            <input type="text" name="peso" value={formData.peso} onChange={handleChange} placeholder="Peso" />
                        </div>
                        <div>
                            <label for="altura">Altura:</label>
                            <input type="text" name="altura" value={formData.altura} onChange={handleChange} placeholder="Altura" />
                        </div>
                        <div>
                            <label for="temperatura">Temperatura:</label>
                            <input type="text" name="temperatura" value={formData.temperatura} onChange={handleChange} placeholder="Temperatura" />
                        </div>
                        <div>
                            <label for="presionAlterial">Presion Alterial:</label>
                            <input type="text" name="presionAlterial" value={formData.presionAlterial} onChange={handleChange} placeholder="Presión Arterial" />
                        </div>
                        <div>
                            <label for="tipoConsulta">Tipo Consulta:</label>
                            <input type="text" name="tipoConsulta" value={formData.tipoConsulta} onChange={handleChange} placeholder="Tipo Consulta" />
                        </div>
                        <div>
                            <label for="antecendentes">Antecentes:</label>
                            <input type="text" name="antecendentes" value={formData.antecendentes} onChange={handleChange} placeholder="Antecedentes" />
                        </div>
                        <div>
                            <label for="motivo">Motivo:</label>
                            <input type="text" name="motivo" value={formData.motivo} onChange={handleChange} placeholder="Motivo" />
                        </div>
                        <div>
                            <label for="valoracion">Valoracion:</label>
                            <input type="text" name="valoracion" value={formData.valoracion} onChange={handleChange} placeholder="Valoración" />
                        </div>
                        <div>
                            <label for="diagnostico">Diagnóstico:</label>
                            <input type="text" name="diagnostico" value={formData.diagnostico} onChange={handleChange} placeholder="Diagnóstico" />
                        </div>
                    </div>
                </div>
                {/*MEDICO------------------------------------------------------------------------------*/}
                <div className="col-md-6">
                    <div className="alert alert-secondary" role="alert">
                        <h3>MEDICO</h3>
                        <div>
                            <label for="medico.nombresMedico">Nombre:</label>
                            <input type="text" name="medico.nombresMedico" value={formData.medico.nombresMedico} onChange={handleChange} placeholder="Nombres Médico" />
                        </div>
                        <div>
                            <label for="medico.apellidosMedico">Apellidos:</label>
                            <input type="text" name="medico.apellidosMedico" value={formData.medico.apellidosMedico} onChange={handleChange} placeholder="Apellidos Médico" />
                        </div>
                        <div>
                            <label for="medico.especialidadMedico.nombreEspecialidadMedico">Especialidad:</label>
                            <input type="text" name="medico.especialidadMedico.nombreEspecialidadMedico" value={formData.medico.especialidadMedico.nombreEspecialidadMedico} onChange={handleChange} placeholder="Nombre Especialidad Médico" />
                        </div>
                        <div>
                            <label for="medico.estadoMedico">Estado:</label>
                            <input type="text" name="medico.estadoMedico" value={formData.medico.estadoMedico} onChange={handleChange} placeholder="Estado Médico" />
                        </div>
                    </div>
                </div>
                {/*CITA------------------------------------------------------------------------------*/}
                <div className="col-md-6">
                    <div className="alert alert-secondary" role="alert">
                        <h3>CITA</h3>
                        <div>
                            <label for="cita.tipoCita">Tipo Cita:</label>
                            <input type="text" name="cita.tipoCita" value={formData.cita.tipoCita} onChange={handleChange} placeholder="Tipo Cita" />
                        </div>
                        <div>
                            <label for="cita.estadoCita">Estado:</label>
                            <input type="text" name="cita.estadoCita" value={formData.cita.estadoCita} onChange={handleChange} placeholder="Estado Cita" />
                        </div>
                        <div>
                            <label for="cita.fechaAgenda">Fecha Cita:</label>
                            <input type="datetime-local" name="cita.fechaAgenda" value={fechaCita} onChange={handleChange} placeholder="Fecha Agenda" />
                        </div>
                        <div>
                            <label for="cita.horaAgenda">Hora Cita:</label>
                            <input type="time" name="cita.horaAgenda" value={formData.cita.horaAgenda} onChange={handleChange} placeholder="Hora Agenda" />
                        </div>
                    </div>
                </div>
                {/*------------------------------------------------------------------------------*/}
                {/*ORDENES------------------------------------------------------------------------------*/}
                <div className="col-md-20">
                    <div className="alert alert-secondary" role="alert">
                        <h3>ORDENES</h3>
                    </div>
                </div>
                {/*EXAMENES------------------------------------------------------------------------------*/}
                <div className="col-md-6">
                    <div className="alert alert-secondary" role="alert">
                        <h3>EXAMENES</h3>
                        <div className="container mt-3">
                            <div className="d-flex justify-content-between mb-3">
                                <table className="table table-hover shadow">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th scope="col" className="table-primary">#</th>
                                            <th scope="col" className="table-primary">Orden</th>
                                            <th scope="col" className="table-primary">Vigencia</th>
                                            <th scope="col" className="table-primary">Examenes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{1}</td>
                                            <td>{formData.OrdenExamenes.idOrdenExamenes}</td>
                                            <td>{formData.OrdenExamenes.vigenciaExamenes}</td>
                                            <td>
                                                <button className="btn btn-outline-success btn-sm" type="button" onClick={() => toggleExamenesDato()}>
                                                    <i className={`fas ${!showExamenes ? 'fa-low-vision' : 'fa-eye'}`}></i>
                                                    {/*{showExamenes ? 'Ocultar' : 'Ver'}*/}
                                                </button>
                                            </td>
                                        </tr>
                                        {showExamenes && ( //aqui muestra los examenes con el boton
                                            <tr>
                                                <td colSpan="4">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover shadow">
                                                            <thead className="bg-primary text-white">
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Codigo</th>
                                                                    <th>Nombre</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {formData.OrdenExamenes.Examenes.map((examen, index) => (
                                                                    <tr key={examen._id}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{examen.codigoExamen}</td>
                                                                        <td>{examen.nombreExamen}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/*MEDICAMENTOS------------------------------------------------------------------------------*/}
                <div className="col-md-6">
                    <div className="alert alert-secondary" role="alert">
                        <h3>MEDICAMENTOS</h3>
                        <div className="container mt-3">
                            <div className="d-flex justify-content-between mb-3">
                                <table className="table table-hover shadow">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th scope="col" className="table-primary">#</th>
                                            <th scope="col" className="table-primary">Codigo</th>
                                            <th scope="col" className="table-primary">Cantidad</th>
                                            <th scope="col" className="table-primary">Entregas</th>
                                            <th scope="col" className="table-primary">Indicaciones</th>
                                            <th scope="col" className="table-primary">Vigencia</th>
                                            <th scope="col" className="table-primary">Medicamentos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{1}</td>
                                            <td>{formData.OrdenMedicamentos.idOrdenMedicamentos}</td>
                                            <td>{formData.OrdenMedicamentos.cantidadMedicamentos}</td>
                                            <td>{formData.OrdenMedicamentos.entregasMedicamentos}</td>
                                            <td>{formData.OrdenMedicamentos.indicacionesMedicamentos}</td>
                                            <td>{formData.OrdenMedicamentos.vigenciaMedicamentos}</td>
                                            <td>
                                                <button className="btn btn-outline-success btn-sm" type="button" onClick={() => toggleMedicamentos()}>
                                                    <i className={`fas ${!showMedicamentos ? 'fa-low-vision' : 'fa-eye'}`}></i>
                                                    {/*{showMedicamentos ? 'Ocultar' : 'Ver'}*/}
                                                </button>
                                            </td>
                                        </tr>
                                        {showMedicamentos && ( //aqui muestra los examenes con el boton
                                            <tr>
                                                <td colSpan="4">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover shadow">
                                                            <thead className="bg-primary text-white">
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Codigo</th>
                                                                    <th>Nombre</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {formData.OrdenMedicamentos.medicamentos.map((medicamento, index) => (
                                                                    <tr key={medicamento._id}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{medicamento.codigoMedicamentos}</td>
                                                                        <td>{medicamento.nombreMedicamentos}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/*PROCEDIMIENTOS------------------------------------------------------------------------------*/}
                <div className="col-md-6">
                    <div className="alert alert-secondary" role="alert">
                        <h3>PROCEDIMIENTOS</h3>
                        <div className="container mt-3">
                            <div className="d-flex justify-content-between mb-3">
                                <table className="table table-hover shadow">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th scope="col" className="table-primary">#</th>
                                            <th scope="col" className="table-primary">Codigo</th>
                                            <th scope="col" className="table-primary">Nombre</th>
                                            <th scope="col" className="table-primary">Descripcion</th>
                                            <th scope="col" className="table-primary">Resultados</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{1}</td>
                                            <td>{formData.OrdenProcedimientos.codigoProcedimientos}</td>
                                            <td>{formData.OrdenProcedimientos.nombreProcedimientos}</td>
                                            <td>{formData.OrdenProcedimientos.descripcionProcedimientos}</td>
                                            <td>{formData.OrdenProcedimientos.resultadosProcedimientos}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/*REMISIONES------------------------------------------------------------------------------*/}
                <div className="col-md-6">
                    <div className="alert alert-secondary" role="alert">
                        <h3>REMISIONES</h3>
                        <div className="container mt-3">
                            <div className="d-flex justify-content-between mb-3">
                                <table className="table table-hover shadow">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th scope="col" className="table-primary">#</th>
                                            <th scope="col" className="table-primary">Codigo</th>
                                            <th scope="col" className="table-primary">Nombre</th>
                                            <th scope="col" className="table-primary">Motivo</th>
                                            <th scope="col" className="table-primary">Especialidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{1}</td>
                                            <td>{formData.OrdenRemisiones.codigoRemisiones}</td>
                                            <td>{formData.OrdenRemisiones.nombreRemisiones}</td>
                                            <td>{formData.OrdenRemisiones.motivoRemisiones}</td>
                                            <td>{formData.OrdenRemisiones.especialidadRemisiones.nombreEspecialidadRemisiones}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/*INCAPACIDADES------------------------------------------------------------------------------*/}
                <div className="col-md-6">
                    <div className="alert alert-secondary" role="alert">
                        <h3>INCAPACIDADES</h3>
                        <div className="container mt-3">
                            <div className="d-flex justify-content-between mb-3">
                                <table className="table table-hover shadow">
                                    <thead className="bg-primary text-white">
                                        <tr>
                                            <th scope="col" className="table-primary">#</th>
                                            <th scope="col" className="table-primary">Codigo</th>
                                            <th scope="col" className="table-primary">Fecha Inicio</th>
                                            <th scope="col" className="table-primary">Fecha Fin</th>
                                            <th scope="col" className="table-primary">Descripcion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{1}</td>
                                            <td>{formData.OrdenIncapacidades.idOrdenIncapacidades}</td>
                                            <td>{fechaInicioIncapacidades}</td>
                                            <td>{fechaFinIncapacidades}</td>
                                            <td>{formData.OrdenIncapacidades.descripcionIncapacidades}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-success btn-sm" type="button" onClick={onSave}>
                    Guardar
                </button>
            </div>
        </div>
    )
}

export default FormHistorias
