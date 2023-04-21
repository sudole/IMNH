import React from 'react';
import { Link } from "react-router-dom";


function Main() {
    const MAX_WEATHER_LENGTH = 3;
    const changePath = () => {
        const path = Math.floor(Math.random() * MAX_WEATHER_LENGTH);
        return "/weather/" + path;
    }
    return (
        <div>
            오늘의 날씨는..
            <p>
                <Link to={changePath()}>?</Link>
            </p>
        </div>
    );
}

export default Main;