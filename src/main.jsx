import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListtedBooks from './components/ListtedBooks/ListtedBooks';
import PagetoRread from './components/PagetoRead/PagetoRread';
import Bookdetails from './components/Bookdetails/Bookdetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listtedbooks",
        loader: ()=>fetch("/books.json"),
        element: <ListtedBooks></ListtedBooks>
      },
      {
        path: "/pagestoread",
        loader: ()=>fetch("/books.json"),
        element: <PagetoRread></PagetoRread>
      },
      {
        path: "/bookdetails/:bookId",
        loader: ()=>fetch("/books.json"),
        element: <Bookdetails></Bookdetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
