import { useLocation,useNavigate } from "react-router-dom"
import {AddComentForm} from './AddComentForm'
import { ComentList } from "./ComentList"
import { FilterProvider } from "./ContextProvider"
export const DetailFeedCard=()=>{
    const {state} =useLocation()
    const fecha = new Date(state.createdAt)
    const navigate = useNavigate()
    return (
    <>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200">
        
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold uppercase">
                
            </div>
            <div>
                <p className="text-xs text-gray-500">
                { /* Fecha de publicacion */ }
                </p>
            </div>
            </div>
        </div>

        {/* Título */}
        <h3 className="text-lg font-bold text-gray-800 mb-1">{state.tittle}</h3>

        {/* Categoría */}
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">
            {state.category.name}
        </span>

            <p className="text-sm text-gray-700 mb-2">{state.text}</p>

        
        <div className="text-sm text-gray-500 text-right">
            Publicado el:  {fecha.toLocaleDateString("es-ES")}
        </div>
        </div>
        <FilterProvider>
            <AddComentForm id={state.id}/>
            <ComentList id={state.id}  />
        </FilterProvider>
    </>
  );
}