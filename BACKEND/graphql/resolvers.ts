const resolvers = {
Query:{
    Usuarios: async (parent, args) => {
        const usuarios = [
            {
                nombre:"Brian"
            },
            {
                nombre:"otro"
            }
            
        ];
        return usuarios;
    }
}
    
}

export {resolvers}