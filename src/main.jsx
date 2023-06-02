import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ShowList from './components/ShowList';
import ShowCard from './components/ShowCard';
import ShowDetails from './components/ShowDetails';
import BookForm from './components/BookForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <ShowList></ShowList>
      },
      {
        path:'showcard',
        element: <ShowCard></ShowCard>
      },
      {
        path:'showDetails/:id',
        element:<ShowDetails></ShowDetails>
      },
      {
        path:'booking/:name',
        element:<BookForm></BookForm>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
