import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: El usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        {/* Usamos un color relajante como el que definimos antes */}
        <h1 className="mb-4 text-9xl font-extrabold text-blue-100">404</h1>
        
        <div className="relative -mt-20">
          <p className="mb-4 text-2xl font-semibold text-gray-800">
            Ups! Página no encontrada
          </p>
          <p className="mb-8 text-gray-500">
            La página que buscas no existe o fue movida.
          </p>
          
          {/* Cambiamos <a> por <Link> para que React no recargue la página completa */}
          <Link
            to="/"
            className="inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 shadow-lg"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;