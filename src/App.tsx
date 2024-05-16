import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home, NotFound} from "./components/pages";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <NotFound/>
    }
])
const App = () => <RouterProvider router={routers} />


export default App
