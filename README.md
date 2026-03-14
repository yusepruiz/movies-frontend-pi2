# Movies Frontend - Proyecto Integrado II

Plataforma frontend para la gestión de un catálogo de Películas y Series, desarrollada como parte de la Actividad 2 de Proyecto Integrado II (Iu Digital). 
Proporciona una interfaz premium, responsiva y amigable para administrar contenido multimedia y sus catálogos asociados (Géneros, Directores, Productoras y Tipos).

## 🚀 Características Principales

*   **Interfaz Premium y Responsiva:** Diseño moderno impulsado por Bootstrap 5, con menús en barra lateral (Sidebar) para escritorio y un *Offcanvas* para dispositivos móviles.
*   **Gestión de Catálogos Completa:** Operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para:
    *   Películas / Series (Medios)
    *   Géneros
    *   Directores
    *   Productoras
    *   Tipos
*   **UX Mejorada con SweetAlert2:** Reemplazo de las tradicionales alertas de texto y validaciones del navegador por modales estilizados, proporcionando feedback claro y no obstructivo (ej. al guardar o eliminar).
*   **Manejo Global de Errores:** Implementación de un `Error Boundary` que intercepta errores inesperados o llamadas a rutas no existentes (404), presentando una página de error amigable y personalizada ('Ops... Algo salió mal').
*   **Código Limpio, Refactorizado y Documentado:** Código altamente modular con uso intenso de Custom Hooks (`useFormState`, `useCatalogs`). Completamente documentado usando JSDoc para facilitar el mantenimiento.


## 🛠️ Tecnologías Utilizadas

*   **Core:** [React 19](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Routing:** [React Router](https://reactrouter.com/) (v7)
*   **Estilos y UI:** [Bootstrap 5](https://getbootstrap.com/) y Bootstrap Icons
*   **Peticiones HTTP:** [Axios](https://axios-http.com/)
*   **Alertas y Notificaciones:** [SweetAlert2](https://sweetalert2.github.io/)

## 📦 Instalación y Ejecución

1.  **Clonar dependencia o navegar al directorio del proyecto.**
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Visualizar el proyecto en desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible por defecto en `http://localhost:5173`.

## 📂 Organización del Código

El código está estructurado en módulos para garantizar la escalabilidad:

*   `src/components/` -> Componentes compartidos y de layout (`FormLayout`, `GenericList`, `Sidebar`, etc).
*   `src/modules/` -> Agrupación por dominio de negocio (`director`, `genre`, `media`, `producer`, `type`).
    *   Cada módulo contiene sus propias validaciones (`components/`), peticiones HTTP (`services/`), control de estado (`hooks/`), visualización (`pages/`) y configuración de rutas.
*   `src/hooks/` -> Custom Hooks globales compartidos (`useFormState`, `useCatalogs`).
*   `src/routes/` -> Configuración principal del enrutador y configuración del menú lateral.
*   `src/services/` -> Configuración global de utilidades y factory APIs.

---

> [!NOTE] 
> Esta aplicación frontend asume que existe una API (Backend) ejecutándose u operando en las rutas correspondientes del servidor manejado por el proxy o base de API configurado (normalmente `http://localhost:4000/api/`).
