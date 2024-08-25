import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import Root from "./Root.jsx"
import {Home,About,ContactUs,Github,Users} from "./components"

import { githubLoader } from './components/Github'

// Steps: 1) call createBrowserRouter, inside that call createRoutesFromElements and then specify nested routes.
const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<ContactUs/>}/>
        <Route 
          path="github" 
          loader={githubLoader}
          element={<Github />}
        />
        <Route path="/users/:myuser" element={<Users />}/>
    </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   < RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
