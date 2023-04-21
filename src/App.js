import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Main from "./pages/Main";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>
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
