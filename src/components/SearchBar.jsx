import {useState} from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');
   const handleChange = (event) => {
      let value = event.target.value;
      if (value < 1 || value > 826) {
        alert('Comienza por 1 y busca hasta el 826!');
        event.target.value = '';
         return;
      }
      setId(value);
    };

   return (
      <div>
         <input type='text' onChange={handleChange}/>
         <button onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
   }
