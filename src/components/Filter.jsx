import React, { useContext } from "react";
import { FilterAndChangeContext } from "./ContextProvider";
export const Filter = () => {
  const {filter,setFilter}=useContext(FilterAndChangeContext)
  const handleChange =(e)=>{
    setFilter(e.target.value)
  }
  return (
    <select
      className="border border-gray-300 rounded px-3 py-2"
      onChange={handleChange}
    >
      <option value="TODOS">Todos</option>
      <option value="Tecnología">Tecnologia</option>
      <option value="Taller">taller</option>
      <option value="Practica Supervisada">Pract. Supervisada</option>
      <option value="Recientes">Más Reciente Primero</option>
      <option value="Ultimos">Menos Reciente Primero</option>
    </select>
  );
};
