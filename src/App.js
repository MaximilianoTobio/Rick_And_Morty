import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail.jsx';
import {useState} from "react";
import axios from 'axios';
import { Routes , Route } from 'react-router-dom';
import Error404 from './components/Error404';

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch (id){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name && !characters.find((char) => char.id === data.id)){
            setCharacters((oldChars) => [...oldChars, data]);
         }else{
            window.alert('¡Mmm , ese personaje ya lo buscaste!');
         }
      
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
      };
      
   
   return (
      <div className='App'>
         <Nav onSearch= {onSearch}/>
         <Routes>
         <Route
          path='/home' element={<Cards characters= {characters} onClose= {onClose}/>}
          /> 
         <Route path='/about' element={<About/>}/>
            <Route path='/detail/:detailId'element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
         </Routes>
      </div>
   );
}
        
         


export default App;
