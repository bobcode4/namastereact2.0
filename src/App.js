import React from "react";
import ReactDOM from "react-dom/client";

import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {lazy, Suspense} from "react";

import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children : [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Safari Mart Loading</h1>}>
                            <Grocery /> 
                        </Suspense>
            }
        ]
    } 
    
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);