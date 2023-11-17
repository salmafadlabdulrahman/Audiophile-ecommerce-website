import { RouterProvider, createBrowserRouter, useParams } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import HeadPhones from "./pages/HeadPhones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Product from "./components/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "headphones",
          element: <HeadPhones />,
        },
        {
          path: "/headphones/:slug",
          element: <Product />
        },
        {
          path: "speakers",
          element: <Speakers />,
        },
        {
          path: "/speakers/:slug",
          element: <Product />
        },
        {
          path: "earphones",
          element: <Earphones />,
        },
        {
          path: "/earphones/:slug",
          element: <Product />
        }
       
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
/*children: [
            {
              path: ":slug",
              element: <Product />
            }
          ]*/
