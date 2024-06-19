// import './App.css'
import Home from './components/Home'
import Destination from './components/Destination/Destination'
import Crew from './components/Crew/Crew'
import Technology from './components/Technology/Technology'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  const router=createBrowserRouter([
    {
        path:"/",
        element:<><Home/></>
    },
    {
        path:"/destination",
        element:<><Destination/></>,
    },
    {
        path:"/crew",
        element:<><Crew/></>
    },
    {
        path:"/technology",
        element:<><Technology/></>
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
