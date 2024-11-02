
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from './Components/Homepage';
import VideoPage from './Components/VideoPage';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Homepage />,
    },
    {
      path: "/room/:id",
      element: <VideoPage />,
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
