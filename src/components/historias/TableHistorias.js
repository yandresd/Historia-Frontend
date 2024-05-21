import React from 'react'

function TableHistorias(props) {

    const { historias, onDelete, onView, verLista , historiasFiltro} = props;

    console.log(historias);

    if (!historias || historias.length === 0) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="container my-5">
            <table className="table table-hover shadow">
                <thead className="bg-primary text-white">
                    <tr>
                        <th scope="col" className="table-primary">Codigo</th>
                        <th scope="col" className="table-primary">Tipo Documento</th>
                        <th scope="col" className="table-primary">Documento</th>
                        <th scope="col" className="table-primary">Nombres</th>
                        <th scope="col" className="table-primary">Apelidos</th>
                        <th scope="col" className="table-primary">Fecha</th>
                        <th scope="col" className="table-primary">Hora</th>
                        <th scope="col" className="table-primary">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {historias.historia.map((item, index) => {
                        // Cambia el tipo de fecha de cada cita.Agenda
                        const fechaCitaDate = new Date(item.cita.fechaAgenda);
                        const fechaCita = fechaCitaDate.toLocaleDateString('es-ES', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        });
                        return (<tr key={item._id}>
                            <td>{item.codigoHistoria}</td>
                            <td>{item.paciente.tipoDocumentoPaciente}</td>
                            <td>{item.paciente.documentoPaciente}</td>
                            <td>{item.paciente.nombresPaciente}</td>
                            <td>{item.paciente.apellidosPaciente}</td>
                            <td>{fechaCita}</td>
                            <td>{item.cita.horaAgenda}</td>
                            <td>
                                <button className="btn btn-outline-success me-2 btn-block"><i className="fas fa-plus" onClick={() => { verLista(); }}></i></button>
                                <button className="btn btn-outline-danger me-2 btn-block"><i className="fas fa-trash" onClick={() => { onDelete(item._id) }}></i></button>
                                <button className="btn btn-outline-primary btn-block"><i className="fas fa-eye" onClick={() => { onView(item) }}></i></button>
                            </td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </div>
    )
}
export default TableHistorias
