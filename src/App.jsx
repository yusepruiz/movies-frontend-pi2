import { Outlet } from 'react-router'

function App() {

  return (
    <div>
      <nav>Mi Navbar de Películas</nav>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
}

export default App
