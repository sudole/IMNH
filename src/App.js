import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";
import Weather from "./pages/Weather";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/weather/:weatherId",
            element: <Weather />
        }
    ]);

    return (
        <div className="App">
            <header className="App-header">
                <RouterProvider router={router}/>
            </header>
        </div>
    );
}

export default App;
