import React from 'react';

function Table() {
  return (
    <div className="container my-5">
    <table className="table table-hover shadow">
      <thead className="bg-primary text-white">
        <tr>
          <th scope="col" className="table-primary">Nombre</th>
          <th scope="col"  className="table-primary">Especialidad</th>
          <th scope="col"  className="table-primary">Horario</th>
          <th scope="col"  className="table-primary">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Clínica ABC</td>
          <td>Medicina General</td>
          <td>Lunes a Viernes: 8:00 AM - 5:00 PM</td>
          <td>
            <button className="btn btn-outline-danger btn-sm me-2"><i className="fas fa-trash"></i></button>
            <button className="btn btn-outline-secondary btn-sm"><i className="fas fa-eye"></i></button>
          </td>
        </tr>
        <tr>
          <td>Clínica XYZ</td>
          <td>Pediatría</td>
          <td>Lunes a Sábado: 9:00 AM - 6:00 PM</td>
          <td>
            <button className="btn btn-outline-danger btn-sm me-2"><i className="fas fa-trash"></i></button>
            <button className="btn btn-outline-secondary btn-sm"><i className="fas fa-eye"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default Table;

