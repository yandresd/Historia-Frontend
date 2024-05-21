import React from 'react'

function TableHistorias(props) {

    const { historias, onDelete, onView } = props;

    console.log(historias);
    
    if (!historias || !historias.historia) {
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
                    return(<tr key={item._id}>
                        <td>{item.codigoHistoria}</td>
                        <td>{item.paciente.tipoDocumentoPaciente}</td>
                        <td>{item.paciente.documentoPaciente}</td>
                        <td>{item.paciente.nombresPaciente}</td>
                        <td>{item.paciente.apellidosPaciente}</td>
                        <td>{item.cita.fechaAgenda}</td>
                        <td>{item.cita.horaAgenda}</td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm me-2"><i className="fas fa-trash" onClick={() => {onDelete(item._id)}}></i></button>
                            <button className="btn btn-outline-secondary btn-sm"><i className="fas fa-eye" onClick={() => {onView(item)}}></i></button>
                        </td>
                    </tr>)
                })}
                
            </tbody>
        </table>
        </div>
    )
}
export default TableHistorias
