import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/Home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import DetailsPage from "./pages/Details/DetailsPage";
import { detailsLoader } from "./pages/Details/detailsLoader";
import { homeLoader } from "./pages/Home/homeLoader";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader
      },
      {
        path: '/search',
        element: <SearchPage />,
        loader: searchLoader
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />,
        loader: detailsLoader
      }
    ]
  }
]);


function App() {
  return <RouterProvider router={router}/>
}

export default App
