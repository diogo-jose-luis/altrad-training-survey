import Link from 'next/link';
import React from 'react'
import { sort } from "fast-sort";


interface Departamento {
    id: number;
    designacao: string;
    descricao: string;
  }

  interface Props {
    sortOrder : string;
  }

const DepartmentTable = async ({ sortOrder}: Props) => {

    const res = await fetch("http://127.0.0.1:8000/departamentos", {
        cache: "no-store",
      });
      const departamentos: Departamento[] = await res.json();
      //const departamentos = null;
    
      console.log(departamentos);

      const sortedDepartamentos = sort(departamentos).asc(sortOrder==='designacao'?departamento=>departamento.designacao:departamento=>departamento.descricao)

  return (
    <table className="table table-bordered my-5">
          <thead>
            <tr>
              <th>
                <Link href="/products?sortOrder=designacao">Designação</Link>
              </th>
              <th>
              <Link href="/products?sortOrder=descricao">Descrição</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedDepartamentos?.map((departamento) => (
              <tr key={departamento.id}>
                <td>{departamento.designacao}</td>
                <td>{departamento.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default DepartmentTable