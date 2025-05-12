import React from "react";

export const Filter = ({ onChange }) => {
  return (
    <select
      className="border border-gray-300 rounded px-3 py-2"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="Todos">Todos</option>
      <option value="Tecnologia">Tecnologia</option>
      <option value="taller">taller</option>
      <option value="Pract. Supervisada">Pract. Supervisada</option>
    </select>
  );
};
