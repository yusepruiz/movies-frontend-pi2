import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider } from 'react-router'

import { router } from '@/routes/appRoutes.jsx'
import './index.css'

/**
 * Punto de entrada principal de la aplicación React.
 * Inicializa el enrutador y renderiza en el elemento 'root' del DOM.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
