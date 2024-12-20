import Link from "next/link";
import React from "react";

interface Departamento{
    id:number;
    designacao:string;
    descricao:string;
}

const DepartamentosPage = async () => {

    const res = await fetch("http://127.0.0.1:8000/departamentos", {cache : 'no-store'});
  const departamentos : Departamento[] = await res.json();

  console.log(departamentos);

  return (
    <div>
      <h1>Departamentos</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <hr></hr>
      <Link href="/">Main Page</Link>
      <hr></hr>
      <>
        <table className="table table-bordered my-5">
            <thead>
                <tr>
                    <th>Designação</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
            {departamentos?.map(departamento => 
                <tr key={departamento.id}>
                    <td>{departamento.designacao}</td>
                    <td>{departamento.descricao}</td>
                </tr>
                 )}
            </tbody>
            
        </table>
      </>
      <hr></hr>
      <Link href="/users/new">New departamento</Link>
    </div>
  );
};

export default DepartamentosPage;
