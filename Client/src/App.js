import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail.jsx';
import {useState} from "react";
import axios from 'axios';
import { Routes , Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Form from './components/Form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from './components/Favorites';


function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(() => {
      const accessValue = localStorage.getItem('access');
      return accessValue === 'true';
      /*
      Se está usando el hook useState para crear un estado local llamado access, 
      el cual se inicializa con el valor almacenado en el localStorage 
      bajo la clave access. Si no hay valor almacenado, entonces se 
      inicializa con el valor false. Luego se crea una función setAccess 
      que se utilizará para actualizar el valor del estado access.
      */
   });
   // const EMAIL = 'max@max.com';
   // const PASSWORD = 'maxtobio123';

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   // function login(userData) {
   //    if (userData.email === '' || userData.password === '') {
   //      return window.alert('¡Completa los campos para poder ingresar!');
   //    }
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //      localStorage.setItem('access', true);
   //      setAccess(true);
   //      /*
   //      se actualiza el valor almacenado en el localStorage bajo la clave access con el valor true.
   //       Luego se actualiza el estado local access con el valor true utilizando la función setAccess.
   //      */
   //      navigate('/home');
   //    } else {
   //      window.alert('¡Usuario o contraseña incorrectos!');
   //    }
   //  }
   function logout() {
      localStorage.removeItem('access');
      setAccess(false);
      navigate('/');
    }

   function onSearch (id){
      const URL_BASE = 'http://localhost:3001/rickandmorty';
      // const API_KEY = '2a5b6e80e805.066223a89f6c5f71a784';

      if (characters.find((char) => char.id == id)){
         return alert('¡Mmm , ese personaje ya lo buscaste!');
        }
      axios(`${URL_BASE}/character/${id}`)
         .then(({ data }) => {
         if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
         } else {
           alert('¡Algo salió mal!');
         }
      });
     }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
      };
      
   useEffect(() => {
      localStorage.setItem('access', access);
   }, [access]);
   /*
   Se está utilizando el hook useEffect para ejecutar una función cada vez 
   que cambie el valor del estado access. La función ejecutada guarda el valor
    actualizado de access en el localStorage bajo la clave access. 
    Esto se hace para mantener el valor del estado access en el localStorage y 
    así evitar que se pierda al recargar la página.
   */ 

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch= {onSearch} logout={logout}/>}
         <Routes>
            <Route
             path='/home' element={<Cards characters= {characters} onClose= {onClose}/>}
             /> 
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id'element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>
      </div>
   );
}
export default App;


