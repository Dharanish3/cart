import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Approutes from './Routes/Approutes';

function App() {
  const router = createBrowserRouter(Approutes)

  return (
    <RouterProvider
    router={router}
   
  />
  )
}

export default App