import React, { useState } from "react";

export const UpMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end items-center p-4 bg-white shadow-sm relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
      >
        Perfil
      </button>

      {open && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md border w-48 z-50">
          <ul className="p-2 space-y-2">
            <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Ver Perfil</li>
            <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Configuración</li>
            <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Cerrar Sesión</li>
          </ul>
        </div>
      )}
    </div>
  );
};
