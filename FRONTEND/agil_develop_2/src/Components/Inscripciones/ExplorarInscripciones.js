import React, { useEffect } from "react";
import { BarNavegador } from "../../NavBar";
import { useQuery } from "@apollo/client";
import { GET_INSCRIPCIONES } from "./graphql/queries";
import { Link } from "react-router-dom";


export const ExplorarInscripcion = () => {
  const { data, error, loading } = useQuery(GET_INSCRIPCIONES);
  useEffect(() => {
    console.log("Datos Inscripciones:", data);
  }, [data]);

  if (loading) return <div>Cargando datos...</div>;

  return (
    <div>
      <BarNavegador />
      <h1 className="text-center mt-5">Inscripciones a Proyectos:</h1>
      <table className="tabla">
        <thead>
          <tr>
            <th>Id_inscripcion</th>
            <th>Id proyecto</th>
            <th>Documento </th>
            <th>Estado de inscripcion</th>
            <th>Fecha de ingreso</th>
            <th>Fase de proyecto</th>
            <th>Fecha Egreso</th>
            <th>Cambiar estado</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.AllInscripciones.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.Id_inscripcion}</td>
                  <td>{u.Id_proyecto}</td>
                  <td>{u.Documento}</td>
                  <td>{u.Estado_inscripcion}</td>
                  <td>{u.Fecha_ingreso}</td>
                  <td>{u.Fase_proyecto}</td>
                  <td>{u.Fecha_egreso}</td>
                  <td>
                    <Link to={`/Inscripcion_Proyectos/${u._id}`}>
                    <i class='fas fa-pen hover:text-yellow-400 cursor-pointer'>Editar</i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
