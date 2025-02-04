import React from 'react'


interface Departamento {
    id: number;
    designacao: string;
    descricao: string;
  }

const UserTable = async () => {

    const res = await fetch("http://127.0.0.1:8000/departamentos", {
        cache: "no-store",
      });
      const departamentos: Departamento[] = await res.json();
      //const departamentos = null;
    
      console.log(departamentos);

  return (
    <table className="table table-bordered my-5">
          <thead>
            <tr>
              <th>Designação</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {departamentos?.map((departamento) => (
              <tr key={departamento.id}>
                <td>{departamento.designacao}</td>
                <td>{departamento.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default UserTable