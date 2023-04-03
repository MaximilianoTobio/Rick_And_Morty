export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={(characterID)=>{onSearch(characterID)}}>Agregar</button>
      </div>
   );
   }
