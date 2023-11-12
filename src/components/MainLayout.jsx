import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div>
        <h1>Navbar</h1>
      <Outlet />
    </div>
  )
}

export default MainLayout
