import './App.css';
import {RutasNavegacion} from './RouterApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import jwt_decode from 'jwt-decode'
import Login from './Components/Login';
import { AuthContext } from "./context/authContext";
import { UserContext } from "./context/userContext";

// const httpLink = createHttpLink({
//   uri: 'https://servidor-gql-pomodoro.herokuapp.com/graphql'
// })

// const authLink = setContext((_, { headers }) => {

//   //encada request de graphql obtenemos el token y lo enviamos al back
//   const token = JSON.parse(localStorage.getItem('token'));
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

 
  
  function App() {
    const [userData, setUserData] = useState({});
    const [authToken, setAuthToken] = useState('');
  
    const setToken = (token) => {
      setAuthToken(token)
      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
      } else {
        localStorage.removeItem('token');
      }
    };
  
    useEffect(() => {
      if (authToken) {
        const decoded = jwt_decode(authToken);
        setUserData({
         // _id: decoded._id,
          Email:decoded.Email,
          rol:decoded.rol,
          Estado_usuario:decoded.Estado_usuario,
          autenticado_usuario:decoded.autenticado_usuario
        });
      }
    }, [authToken]);


    return (
      <>
        
          <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
            <UserContext.Provider value={{ userData, setUserData }}>
              <Router>
                <Routes>
                
                
                <Route path="/Login" element={<Login />} />
                

                </Routes>
            </Router>
          </UserContext.Provider>
        </AuthContext.Provider>
      
    </>
  );
}
export default App;
  



