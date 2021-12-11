import React from "react";
import { BarNavegador } from "../../NavBar";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_INSCRIPCION } from "./graphql/queries";


export const InscripcionProyecto = () => {
  
  const { _id } = useParams();
  const { data, error, loading } = useQuery(GET_INSCRIPCION, {
    variables:{_id},
  });

  console.log(data);

  return (
    <div>
      <BarNavegador />
      <h1 className="text-center mt-5">Editar Inscripcion: {_id}</h1>
    </div>
  );
};
