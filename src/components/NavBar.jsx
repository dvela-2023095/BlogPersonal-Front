import React from "react";

export const NavBar = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">MiApp</h1>
      <nav className="space-y-4">
        <button className="block text-left text-gray-800 hover:text-blue-500">Feed</button>
        <button className="block text-left text-gray-800 hover:text-blue-500">Mis Publicaciones</button>
      </nav>
    </div>
  );
};
