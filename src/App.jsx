// import './App.css'
import Home from './components/Home'
import Destination from './components/Destination/Destination'
import Crew from './components/Crew/Crew'
import Technology from './components/Technology/Technology'
import Mars from './components/Destination/Mars'
import Europa from './components/Destination/Europa'
import Titan from './components/Destination/Titan'
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
        children:[
          {
            path:"/destination/mars",
            element:<Mars/>
          },
          {
            path:"/destination/europa",
            element:<Europa/>
          },
          {
            path:"/destination/titan",
            element:<Titan/>
          },
        ]
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
