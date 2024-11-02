import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Home from './Component/Home/Home.jsx';
import DashBoard from './Component/DashBoard/DashBoard.jsx';
import BookDetails from './Component/BookDetails/BookDetails.jsx';
import ListTedBook from './Component/ListTedBook/ListTedBook.jsx';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/listedbook",
        loader:(()=>fetch("/booksData.json")),
        element: <ListTedBook></ListTedBook>,
      },
      {
        path: "/book/:bookId",
        loader:(()=>fetch("/booksData.json")),
        element: <BookDetails></BookDetails>,
      },
    ],
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer></ToastContainer>
  </StrictMode>,
)
