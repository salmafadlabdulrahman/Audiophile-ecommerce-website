import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MainLayout from './components/MainLayout'
import HeadPhones from './pages/HeadPhones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "headphones",
          element: <HeadPhones />
        },
        {
          path: "speakers",
          element: <Speakers />
        },
        {
          path: "earphones",
          element: <Earphones />
        },
        
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
