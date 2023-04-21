import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>,
            errorElement: <ErrorPage />
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
