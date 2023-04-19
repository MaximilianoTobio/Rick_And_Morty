import {useState} from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');
   
   
   const handleChange = (event) => {
      const value = event.target.value;
      // if (value < 1 || value > 826) {
      //   alert('Comienza por 1 y busca hasta el 826!');
      //   event.target.value = '';
      //    return;
      // }
      setId(value);
    };

    const handleChangeRandom = () => {
      return (Math.floor(Math.random() * 826) + 1).toString()
    };
    

   return (
      <>
         <div className={style.container}>
            <div className={style.input__container}>
               <input id="search-input" type="text" onChange={handleChange} className={style.search__input} placeholder='Buscar personaje'/>
               {id < 1 || id > 826 && <p className={style.error}>Comienza por 1 y busca hasta el 826!</p>}
            </div>
            <div className={style.button__container}>
               <button onClick={()=>{onSearch(id)}} className={style.pulse}>Agregar!</button>
               <button onClick={()=>{onSearch(handleChangeRandom())}} className={style.pulse} aria-label="Buscar personaje al azar">
                  Random!
               </button>
            </div>
         </div>

      </>
   );
};

         
     /*
      return (
      <div>
         <input type='text' onChange={handleChange}/>
         <hr />
         <button onClick={()=>{onSearch(id)}}>Agregar personajes</button>
         <button onClick={()=>{
            handleChangeRandom();
            onSearch(random)}}
         >Agrega un personaje aleatorio</button>
      </div>
         );
             const handleChangeRandom = () => {
      const valueRandom = Math.floor(Math.random() * 826)+1;
      setRandom(valueRandom.toString());
    };
    const [random, setRandom] = useState((Math.floor(Math.random() * 826) + 1).toString());
    
     
     
     */
