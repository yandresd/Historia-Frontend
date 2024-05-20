import { logRoles } from '@testing-library/react';
import React, { useState, useEffect } from 'react'

function FormHistorias(props) {

    const { onSave, historia } = props;

    const [showExamenes, setShowExamenes] = useState(false);

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

    /*const toggleExamenes = (index) => {
        setShowExamenes(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
        console.log(index);
    };*/

    const toggleExamenes = () => {
        setShowExamenes(prevState => !prevState);
    };
    

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
                            <input type="datetime-local" name="cita.fechaAgenda" value={formData.cita.fechaAgenda} onChange={handleChange} placeholder="Fecha Agenda" />
                        </div>
                        <div>
                            <label for="cita.horaAgenda">Hora Cita:</label>
                            <input type="time" name="cita.horaAgenda" value={formData.cita.horaAgenda} onChange={handleChange} placeholder="Hora Agenda" />
                        </div>
                    </div>
                </div>
                <div className="col-md-20">
                    <div className="alert alert-secondary" role="alert">
                        <h3>ORDENES</h3>
                    </div>
                </div>
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
                                                <button className="btn btn-outline-success btn-sm" type="button" onClick={() => toggleExamenes(0)}>
                                                    <i className="fas fa-eye" ></i>
                                                    {showExamenes ? ' Ocultar' : ' Ver'}
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
                                            <th scope="col" className="table-primary">Nombre</th>
                                            <th scope="col" className="table-primary">Cantidad</th>
                                            <th scope="col" className="table-primary">Indicaciones</th>
                                            <th scope="col" className="table-primary">Dosis</th>
                                            <th scope="col" className="table-primary">Vigencia</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {formData.OrdenMedicamentos.medicamentos.map((medicamento, index) => (
                                            <tr key={medicamento._id}>
                                                <td>{index + 1}</td>
                                                <td>{medicamento.codigoMedicamentos}</td>
                                                <td>{medicamento.nombreMedicamentos}</td>
                                                <td>{formData.OrdenMedicamentos.medicamentos.cantidadMedicamentos}</td>
                                                <td>{formData.OrdenMedicamentos.medicamentos.indicacionesMedicamentos}</td>
                                                <td>{formData.OrdenMedicamentos.medicamentos.dosisMedicamentos}</td>
                                                <td>{formData.OrdenMedicamentos.medicamentos.vigenciaMedicamentos}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-md-6">
                    <div className="alert alert-secondary" role="alert">
                        <h3>REMISIONES</h3>
                        <div>
                            <label htmlFor="OrdenRemisiones.nombreRemisiones">Nombre:</label>
                            <input type="text" name="OrdenRemisiones.nombreRemisiones" value={formData.OrdenRemisiones.nombreRemisiones} onChange={handleChange} placeholder="Nombre Remisiones" />
                        </div>
                        <div>
                            <label htmlFor="OrdenRemisiones.codigoRemisiones">Código:</label>
                            <input type="text" name="OrdenRemisiones.codigoRemisiones" value={formData.OrdenRemisiones.codigoRemisiones} onChange={handleChange} placeholder="Código Remisiones" />
                        </div>
                        <div>
                            <label htmlFor="OrdenRemisiones.motivoRemisiones">Motivo:</label>
                            <input type="text" name="OrdenRemisiones.motivoRemisiones" value={formData.OrdenRemisiones.motivoRemisiones} onChange={handleChange} placeholder="Motivo Remisiones" />
                        </div>
                        <div>
                            <label htmlFor="OrdenRemisiones.especialidadRemisiones.nombreEspecialidadRemisiones">Especialidad:</label>
                            <input type="text" name="OrdenRemisiones.especialidadRemisiones.nombreEspecialidadRemisiones" value={formData.OrdenRemisiones.especialidadRemisiones.nombreEspecialidadRemisiones} onChange={handleChange} placeholder="Nombre Especialidad Remisiones" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}     

export default FormHistorias

                    {/*{formData.OrdenExamenes.Examenes.map((examen, index) => (
    <div key={index}>
        <label for="index">{index + 1}: </label>
        <input type="text" name={"OrdenExamenes.Examenes.idExamenes"} value={examen.idExamenes} onChange={handleChange} placeholder="ID Examen" />
        <input type="text" name={"OrdenExamenes.Examenes.nombreExamen"} value={examen.nombreExamen} onChange={handleChange} placeholder="Nombre Examen" />
        <input type="text" name={"OrdenExamenes.Examenes.codigoExamen"} value={examen.codigoExamen} onChange={handleChange} placeholder="Código Examen" />
        <input type="text" name={"OrdenExamenes.Examenes.descripcionExamen"} value={examen.descripcionExamen} onChange={handleChange} placeholder="Descripción Examen" />
    </div>
))}*/}
