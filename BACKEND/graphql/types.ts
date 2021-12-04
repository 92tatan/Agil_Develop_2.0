import { gql } from "apollo-server-core";

const typeDefs = gql`

    scalar Date

    type Query{
        InscripcionPorId(_id:String!):[Inscripcion]
        Inscripciones:[Inscripcion] 
        Usuarios:[Usuario]
    }

    type Mutation{
        crearUsuario(            
            nombre: String!
            apellido:String!
            telefono:String!
            correo:String!
            rol:Enum_RolUsuario!
        ):Usuario       

    }    

    type Mutation{
        crearInscripcion(
            estado:Enum_EstadoInscripcion
            id_estudiante:String!
            fecha_ingreso:Date!
            fecha_egreso: Date!
            id_proyecto:String!
            ):Inscripcion

        eliminarInscripcion(_id:String!):Inscripcion

        modificarInscripcion(
            _id:String!
            estado:Enum_EstadoInscripcion
            
            ):Inscripcion

        
    }
    type Usuario{
        _id:ID!
        nombre: String! 
        apellido:String!
        telefono:String!
        correo:String!
        rol: Enum_RolUsuario
    }    

    

    type Inscripcion{
        _id:ID!  
        id_proyecto:String!      
        estado: Enum_EstadoInscripcion 
        fecha_ingreso: Date
        fecha_egreso: Date    
        id_estudiante: Usuario!   
    }
    

    enum Enum_EstadoInscripcion {
        ACEPTADA 
        RECHAZADA 
        PENDIENTE 
    }

    enum Enum_RolUsuario {
        LIDER
        ADMINISTRADOR
        ESTUDIANTE
    }
`;

export {typeDefs};