import { gql } from "apollo-server-core";

const typeDefs = gql`

    type Query{
        InscripcionPorId(_id:String!):[Inscripcion]
        Inscripciones:[Inscripcion] 
        Usuarios:[Usuario]
    }

    type Mutation{
        crearUsuario(            
            nombre: String!
            apellido:String
            telefono:String
            correo:String
        ):Usuario       

    }    

    type Mutation{
        crearInscripcion(
            estado:Enum_EstadoInscripcion
            ):Inscripcion

        eliminarInscripcion(_id:String!):Inscripcion

        modificarInscripcion(
            _id:String!
            estado:Enum_EstadoInscripcion
            ):Inscripcion

        
    }
    type Usuario{
        
        nombre: String! 
        apellido:String!
        telefono:String!
        correo:String!
    }    

    

    type Inscripcion{
        _id:ID!        
        estado: Enum_EstadoInscripcion        
    }
    

    enum Enum_EstadoInscripcion {
        ACEPTADA 
        RECHAZADA 
        PENDIENTE 
    }
`;

export {typeDefs};